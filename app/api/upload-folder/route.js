import { NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'
import handleFolderAndFileTree from "@/public/utils/handleFolderAndFileTree"
import handlePath from "@/public/utils/handlePath"
import { PurgeCSS } from "purgecss"
import AdmZip from "adm-zip"


export async function POST(request){
    const files = await request.json()
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


    const outputFileName = './public/zip/cleanedcss.zip';
    const zip = new AdmZip();
    zip.addLocalFolder("./public");
    zip.writeZip(outputFileName);


    



    return new NextResponse(null, {
        headers: {
            'Content-Disposition': `attachment; filename="${outputFileName}"`,
            'Content-Type':  'application/zip'
        }
    })
}