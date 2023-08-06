import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function contact() {
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
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action='#' className='space-y-8'>
              <div>
                <label
                  for='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Your email
                </label>
                <input
                  type='email'
                  id='email'
                  className='shadow-sm glass_effect_box placeholder:text-slate-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                  placeholder='name@flowbite.com'
                  required
                />
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
                  className='block p-3 w-full text-sm text-slate-900 placeholder:text-slate-600 glass_effect_box  rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 '
                  placeholder='Let us know how we can help you'
                  required
                />
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
                  className='block p-2.5 w-full text-sm text-gray-900 placeholder:text-slate-600 glass_effect_box rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 '
                  placeholder='Leave a comment...'></textarea>
              </div>
              <button
                type='submit'
                className='py-3 px-5 text-sm font-medium bg-slate-900 hover:bg-slate-800 text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300'>
                Send message
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
