const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path')
const url = require('url');

function isLocalPath(filePath) {
    return !url.parse(filePath).protocol; // Check if the filePath has a protocol (http/https) or not
  }
  
  async function getCssPathFromHtml(file){
  
    const cssPaths = []
    const jsPaths = []
    const pathfolder = path.dirname(file.path)
    const pathfile = path.join('uploads' ,file.path )
  
    const html = await  fs.readFileSync(pathfile , 'utf-8')
    const $ = cheerio.load(html);
    const scriptTags = $('script[src]');
  
  
    // to extract css path from html
    $('link[rel="stylesheet"]').each((index, element) => {
        const cssPath = $(element).attr('href');
  
        if (cssPath && isLocalPath(cssPath)) {
          const customcss = path.join( 'uploads',pathfolder ,cssPath).replace(/\\/g, '/')
          cssPaths.push(customcss); 
        }

    });
  
  
    // to extract js file from html
  
  
    // Extract the 'src' attribute from each script tag
    scriptTags.each((index, element) => {
      const jsPath = $(element).attr('src');
      if (jsPath && isLocalPath(jsPath)) {
        const customjs = path.join('uploads',pathfolder ,jsPath).replace(/\\/g, '/')
        jsPaths.push(customjs);
      }
    });
  
  
    return [cssPaths, jsPaths]
  }
  
  
  
  async function getHTMLCSSJSPath(files){
  
  
    const pathscontent = await Promise.all(files.map(async file => {
      const ext = path.extname(file.name);
  
      const isHTMLFile = [ '.htm', '.html'].includes(ext.toLowerCase());
        
  
  
      if (isHTMLFile){
        const cssAndJs = await  getCssPathFromHtml(file)
        const csspaths = cssAndJs[0] 
        const jspaths = cssAndJs[1]
        const htmlpath = path.join('uploads', file.path)
        return {content: [htmlpath.replace(/\\/g, '/'), ...jspaths], css: csspaths }
  
      }
  
  
    }))
  
    return pathscontent.filter(Boolean);
  
  }




module.exports = {getHTMLCSSJSPath}