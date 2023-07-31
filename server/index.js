const { PurgeCSS } = require('purgecss');
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs-extra')
const  {createFolderLocation} = require('./utils/customMadeMulter.js')
const archiver = require('archiver')
const { getHTMLCSSJSPath } =require('./utils/handlePath.js')

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/api/uploadfiles'  ,async (req,res) => {

  const files = req.body
  // this will create the same folder tree which were uploaded 
  createFolderLocation(files)

  // gets the link of css and script and format
  const json = await getHTMLCSSJSPath(files)

  json.forEach(async (obj, i) => {

    const purgecss = await new PurgeCSS().purge({
      content: obj.content,
      css: obj.css
    });
    
    // removes unused css
    purgecss.forEach(o => fs.writeFileSync(o.file , o.css))
  })


  res.send('works')
})



app.get('/api/downloadcleanedcss', (req,res) => {
  const folderPath = 'uploads/'
  const outputFileName = 'cleanedcss.zip';


  const output = fs.createWriteStream(outputFileName);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Maximum compression level
  });

  output.on('close', () => {
    res.download(outputFileName, (err) => {
      if (err) {
        console.error('Error while downloading folder:', err);
      }

      fs.unlinkSync(outputFileName); // Remove the temporary ZIP file after download
        // Removing the folder when the work is done
    fs.rmdirSync('/uploads', { recursive: true });
    });
  });

  archive.pipe(output);
  archive.directory(folderPath, false);
  archive.finalize();

})
app.listen(5000,()=> console.log('working') )


