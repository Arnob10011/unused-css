import { NextResponse } from "next/server";
import { PurgeCSS } from "purgecss";
export async function GET(request, response) {
  console.log("get request");
}
export async function POST(request, res) {
  const files = await request.json()


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
  console.log('cleaned css', cleanedCss)
  
  return NextResponse.json({
    css: cleanedCss,
    originalCssSize: files.css.length,
    cleanedCssSize: cleanedCss.length,
    reduction: ((1 - cleanedCss.length / files.css.length) * 100).toFixed(2)
  }, { status: 200 })


}
