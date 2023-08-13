"use client";
import React from "react";
import RocketIcon from "./SVG/RocketIcon";
import axios from "axios";
export default function Form() {

  async function handleHTMLCSSJS(e){
    e.preventDefault()
    
    // no comments for today
    const jsonData = {
        html : e.target.html.value,
        css : e.target.css.value,
        js : e.target.js.value,

    }

    try {
        const res = await axios.post('api/formcleaner', jsonData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = res.data

        
        // you can use the pop up based on res.data
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }

}


  return (
    <div>

      <form  onSubmit={handleHTMLCSSJS} >
        <textarea
          className='w-full placeholder-slate-600 p-5 h-40 bg-transparent border-4 rounded-2xl glass_effect_box'
          name='html'
          id=''
          placeholder='Markup'></textarea>
        <textarea
          className='w-full placeholder-slate-600 p-5 my-3 h-40 bg-slate-500 border-4 rounded-2xl glass_effect_box'
          name='css'
          id=''
          placeholder='Stylesheet'></textarea>
                  <textarea
          className='w-full placeholder-slate-600 p-5 my-3 h-40 bg-slate-500 border-4 rounded-2xl glass_effect_box'
          name='js'
          id=''
          placeholder='Script'></textarea>
        <button className='p-4 flex bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-2xl text-white w-full'>
          <div className='flex mx-auto'>
            Let's go
           
          <RocketIcon/>
          </div>
        </button>
      </form>
    </div>
  );
}
