"use client";
import PieChart from "../components/piechart";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Form from "../components/Form";
import UploadFolder from "@/components/UploadFolder";
import HomeIntroduction from "@/components/HomeIntroduction";

export const metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
  },
};

export default function Home() {

  


  return (
    <div>
      <div className='bg-svg'>
        <div
          id='crypto-modal'
          tabIndex='-1'
          aria-hidden='false'
          className='fixed top-0 flex hidden  glass_effect_modal h-screen left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full'>
          <div className='relative w-full max-w-md max-h-full mx-auto'>
            <div className='relative glass_effect_modal rounded-lg shadow'>
              <button
                type='button'
                className='absolute top-3 right-2.5 text-slate-400 bg-transparent hover:bg-slate-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='crypto-modal'>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
              <div className='px-6 py-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-base font-semibold text-gray-900 lg:text-xl dark:text-white'>
                  Compressed
                </h3>
              </div>
              <div className='p-6'>
                <p className='text-sm font-normal text-slate-600'>
                  Here's your compressed minified version of your css file. It
                  doesn't contain any unnecessary stylesheet
                </p>
                <div className='p-10'>
                  <PieChart />
                </div>
                <div>
                  <textarea
                    className='w-full placeholder-slate-600 p-5 my-3 h-40 bg-slate-500 border-4 rounded-2xl glass_effect_box'
                    name=''
                    id=''
                    placeholder='Stylesheet'></textarea>{" "}
                </div>

                <div className='mb-3 text-sm'>Copy the one you need</div>
                <div className='flex'>
                  <button className='py-3 px-5 flex text-base bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white rounded-2xl'>
                    Minified{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6 ml-1'>
                      <path
                        fillule='evenodd'
                        d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                        clipRule='evenodd'
                      />
                      <path
                        fillule='evenodd'
                        d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button className='ml-5 py-3 px-5 flex text-base bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white rounded-2xl'>
                    Beautified{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6 ml-1'>
                      <path
                        fillule='evenodd'
                        d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                        clipRule='evenodd'
                      />
                      <path
                        fillule='evenodd'
                        d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id='crypto-modal'
          tabIndex='-1'
          aria-hidden='false'
          className='fixed top-0 flex hidden glass_effect_modal h-screen left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full'>
          <div className='relative w-full max-w-md max-h-full mx-auto'>
            <div className='relative glass_effect_modal rounded-lg shadow'>
              <button
                type='button'
                className='absolute top-3 right-2.5 text-slate-400 bg-transparent hover:bg-slate-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='crypto-modal'>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
              <div className='px-6 py-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-base font-semibold text-gray-900 lg:text-xl dark:text-white'>
                  Compressed
                </h3>
              </div>
              <div className='p-6'>
                <p className='text-sm font-normal text-slate-600'>
                  Here's your compressed minified version of your css file. It
                  doesn't contain any unnecessary stylesheet
                </p>

                <div className='p-10'>
                  <PieChart />
                </div>

                <div className='mb-3 text-sm mt-3 text-slate-600'>
                  Download your project zip
                </div>
                <div className='flex'>
                  <button className='py-3 px-5 flex text-base bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white rounded-2xl'>
                    Minified{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6 ml-1'>
                      <path
                        fillule='evenodd'
                        d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                        clipRule='evenodd'
                      />
                      <path
                        fillule='evenodd'
                        d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                  <button className='ml-5 py-3 px-5 flex text-base bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white rounded-2xl'>
                    Beautified{" "}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6 ml-1'>
                      <path
                        fillule='evenodd'
                        d='M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z'
                        clipRule='evenodd'
                      />
                      <path
                        fillule='evenodd'
                        d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navbar />

        <div>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className=' mt-32'>
              <HomeIntroduction/>
              <div className='w-full grid grid-cols-2 gap-10'>
                <div>
                  <div className='glass_effect rounded-2xl p-7'>
                    <div className='text-slate-800 font-bold'>
                      Upload Folder
                    </div>
                    <p className='text-sm mb-3 text-slate-700'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta labore iure atque, laudantium, quo itaque excepturi
                      distinctio commodi libero laboriosam magnam? Facilis iusto
                      labore, incidunt quo pariatur praesentium soluta at.
                    </p>
                    
                    <UploadFolder/>

                  </div>
                </div>
                <div className='glass_effect rounded-2xl p-7'>
                  <div className=' text-slate-800 font-bold'>
                    Paste the Code
                  </div>
                  <p className='text-sm mb-3 text-slate-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta labore iure atque, laudantium, quo itaque excepturi
                    distinctio commodi libero laboriosam magnam? Facilis iusto
                    labore, incidunt quo pariatur praesentium soluta at.
                  </p>
                  <Form />
                </div>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}
