'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import BlackLoadingSpinner from "@/components/SVG/BlackLoadingSpinner";
import WarningMessage from "@/components/WarningMessage";

export default function contact() {
  const [loading, setLoading] = useState(false)
  const [loader, setLoader] = useState('')
  const [error , setError] = useState('')



  async function handleFeedback(e){
    e.preventDefault()
    setLoading(true)
    console.log('trged')

    const json = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      text: e.target.text.value
    }

    try {
      const res  = await axios.post('/api/feedback', JSON.stringify(json),{
        headers : {
          "Content-Type" : "application/json"
        }
      })

      if (!res.data.success) throw new Error(res.data.error)
      setLoader(res.data.message)
      setError('')
      
      
    } catch (error) {

      setLoader(error.message)
      setError(error.message)
    }

  }


  useEffect(() => {

    if(error.length > 0){
      setLoading(false)
      setLoader('')
    }

    else if (loader.length > 0){
      
      const formEl = document.getElementById('form')    
 setLoading(false)
        setLoader('')
        formEl.reset()
    }

  }, [loader])



  return (
    <div>
      <div className='bg-svg'>
        <Navbar />
        <section className='pt-40 min-h-[94vh]'>
          <div className=' pt-8 pb-4 glass_effect  rounded-3xl lg:pt-16 lg:pb-4 px-4 mx-auto max-w-screen-md'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-800'>
              Contact Us
            </h2>
            <p className='mb-4 lg:mb-8 font-light text-center text-slate-700 sm:text-xl'>
              Got a technical issue? Want to send feedback about a beta feature? Let us know.
            </p>
            <form onSubmit={handleFeedback} className='space-y-8' id="form">
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  name="email"
                  className='shadow-sm glass_effect_box placeholder:text-slate-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@flowbite.com'
                  required
                />
                {error && error.includes('email') && <WarningMessage message={error}/> }
              </div>
              <div>
                <label
                  for='subject'
                  className='block mb-2 text-sm font-medium text-slate-800 dark:text-gray-300'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name="subject"
                  className='block p-3 w-full text-sm text-slate-900 placeholder:text-slate-600 glass_effect_box  rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 '
                  placeholder='Let us know how we can help you'
                  required
                />
                {error && error.includes('30') && <WarningMessage message={error}/>}
                
              </div>
              <div className='sm:col-span-2'>
                <label
                  for='message'
                  className='block mb-2 text-sm font-medium text-slate-900 dark:text-gray-400'>
                  Your message
                </label>
                
                <textarea
                  id='message'
                  rows='6'
                  name="text"
                  required
                  className='block p-2.5 w-full text-sm text-gray-900 placeholder:text-slate-600 glass_effect_box rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 '
                  placeholder='Leave a comment...'></textarea>
                  {error && error.includes('500') && <WarningMessage message={error}/>}

              </div>
              <button
                type='submit'
                disabled={loading}
                className='py-3 px-5 text-sm font-medium bg-slate-900 hover:bg-slate-800 text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 flex'>
                Send message


                {loading && <BlackLoadingSpinner/> }
              </button>
            </form>

          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
