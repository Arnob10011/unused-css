import {PurgeCSS} from 'purgecss'

 
export default async function handler(req , res){
    if (req.method !== 'POST'){
        res.status(405).end() // Method not allowed
    }


    const files = req.body


    if (files.css && (files.html == '') && (files.js == '')){
      return res.status(404).send({data: 'Only css was send. You have to provide it with html or css text'})
    }


    let purgeCssConfig
    // this code is written to check if there are any js file 
    if (files.js == ''){
       purgeCssConfig= {
        content: [
          {
            raw: files.html,
            extension: 'html'
          },
  
        ],
        css: [
          {
            raw: files.css
          }
        ]
      }
    }else{
       purgeCssConfig= {
        content: [
          {
            raw: files.html,
            extension: 'html'
          },
          {
            raw: files.js,
            extension: 'js'
          }
  
        ],
        css: [
          {
            raw: files.css
          }
        ]
      }
    }

    const resulti = await new PurgeCSS().purge(purgeCssConfig)
    const cleanedCss = resulti[0].css
    res.status(200).send({html :files.html, css: cleanedCss, js: files.js  })


}