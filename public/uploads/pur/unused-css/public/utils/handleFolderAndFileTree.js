// import fs from 'fs'
// import path from 'path'
const fs = require('fs')
const path =require('path')




export default function handleFolderAndFileTree(files){
    files.forEach(file => {
        const dirpath = path.dirname(file.path)
        const folderpath = path.join('public' ,'uploads', dirpath)
        const filepath = path.join('public' ,'uploads', file.path)
    
        fs.mkdirSync(folderpath, {recursive: true})
        fs.writeFileSync(filepath, file.content)
    
      })
}