import React from 'react'
import axios from 'axios'
export default function InputSection() {

    async function handleHTMLCSSJS(e){
        e.preventDefault()
        
        // no comments for today
        const jsonData = {
            html : e.target.html.value,
            css : e.target.css.value,
            js : e.target.js.value,
            
        }

        try {
            const res = await axios.post('api/cleanedTextCss', jsonData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    
            console.log(res.data)
            
        } catch (error) {
            console.log(error.message)
        }

    }


  return (
    <div>

    <form  onSubmit={handleHTMLCSSJS} >
        <input name='html' type='text'placeholder='html'/>
        <input name='css' type='text'placeholder='css' required />
        <input name='js' type='text'placeholder='js'/>
        <input type='submit' />
    </form>


      
    </div>
  )
}
