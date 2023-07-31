
const path = require('path')
const fs = require('fs')
function createFolderLocation(files){

    files.forEach(file => {
      const dirpath = path.dirname(file.path)
      const folderpath = path.join('uploads', dirpath)
      const filepath = path.join('uploads', file.path)
  
      fs.mkdirSync(folderpath, {recursive: true})
      fs.writeFileSync(filepath, file.content)
  
    })
  
  }


module.exports = {createFolderLocation}