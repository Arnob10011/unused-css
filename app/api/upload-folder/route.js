import { NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'
import handleFolderAndFileTree from "@/public/utils/handleFolderAndFileTree"
import handlePath from "@/public/utils/handlePath"
import { PurgeCSS } from "purgecss"
import createZip from "@/public/utils/createZip"
// import AdmZip from "adm-zip"

export  async function  GET(){

    const zipPath = './public/zip/cleanedcss.zip';
    const filePath = "./public/uploads"

    // create zip
    await createZip(filePath, zipPath)

    return new NextResponse('posted')

}

export async function POST(request, response){
   try {


    const files = await request.json()
    const isExistedFilePath = fs.existsSync('./public/zip/cleanedcss.zip')
    const isExistedFolderPath = fs.existsSync('./public/uploads')

    if(isExistedFolderPath){
        fs.rmdirSync('./public/uploads', { recursive: true });
    }



    if (isExistedFilePath){
        console.log('remove zip')
        fs.rmdirSync('./public/zip', {recursive: true})
    }
    

    // create uploads folder and in their the clients html css and js is placed
    handleFolderAndFileTree(files)
    const json = await handlePath(files)

    json.forEach(async (obj, i) => {
        const purgecss = await new PurgeCSS().purge({
            content: obj.content,
            css: obj.css
          });
    // updates the css file in an cleaner version
    purgecss.forEach(o => fs.writeFileSync(o.file , o.css))
    })


    return new NextResponse('/api/upload-folder')


    
   } catch (error) {
    console.log(error.message)
   }

}