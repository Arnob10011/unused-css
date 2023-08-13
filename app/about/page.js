import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function about() {
  return (
    <div>
      <div className='bg-svg'>
        <Navbar />
        <section class='min-h-[94vh]'>
          <div className='pt-40 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div class='glass_effect rounded-2xl mx-auto py-6 sm:py-8 lg:py-12'>
              <div class='mx-auto max-w-screen-md px-4 md:px-8'>
                <h1 class='mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6'>
                  Our competitive advantage
                </h1>

                <p class='mb-6 text-slate-600 sm:text-lg md:mb-8 leading-7'>
                  Welcome to our website, which is an unique free tool in the
                  market that can make your life easier and make web development
                  more fun and faster. Whether you are making a wordpress, a traditional
                  php, or any project that doesn't use NPM, we have an
                  impressive tool for you. It can give you relief from the
                  stylesheet disease that we all face while developing website
                  in any other framework . We are a group of
                  enthusiastic developers who enjoy building awesome and helpful
                  online tools for everyone. We believe that the internet should
                  be a place where you can do anything you want with ease and
                  convenience.
                  <br />
                  <br />
                  That’s why we are always working hard to bring you new and
                  improved tools that can meet your needs and expectations. We
                  appreciate your support and feedback, so please feel free to
                  reach out to us anytime. We are always happy to hear from you
                  and assist you with any issues or questions you may have.
                  Thank you for choosing us for making your website faster. We
                  hope you have a great time using our services as much as we
                  have a blast creating them for you.
                </p>

                <section class='mb-10 dark:bg-gray-900'>
                  <div class='container mx-auto'>
                    <div class='mt-6 md:flex md:items-center md:justify-between'>
                      <div>
                        <h1 class='text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white'>
                          Our team
                        </h1>

                        <div class='flex mx-auto mt-6'>
                          <span class='inline-block w-40 h-1 bg-slate-800 rounded-full'></span>
                          <span class='inline-block w-3 h-1 mx-1 bg-slate-800 rounded-full'></span>
                          <span class='inline-block w-1 h-1 bg-slate-800 rounded-full'></span>
                        </div>
                      </div>
                    </div>

                    <section class='grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-2'>
                      <div class='p-8 glass_effect rounded-lg dark:border-gray-700'>
                        <p class='leading-loose text-slate-700 dark:text-gray-400'>
                          “Hi, I’m Abdullah! I’m a full-stack developer with
                          over five years of experience in building web and
                          mobile applications. When I’m not coding, I love to
                          travel. I’m always eager to learn new things and
                          challenge myself as a programmer.”
                        </p>

                        <div class='flex items-center mt-8 -mx-2'>
                          <img
                            class='object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-teal-300 dark:ring-gray-700'
                            src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                            alt=''
                          />

                          <div class='mx-2'>
                            <h1 class='font-semibold text-gray-800 dark:text-white'>
                              Abdullah
                            </h1>
                            <span class='text-sm text-slate-500 dark:text-gray-400'>
                              Opensource Programmer
                            </span>
                          </div>
                        </div>
                      </div>

                      <div class='p-8 glass_effect rounded-lg dark:border-gray-700'>
                        <p class='leading-loose text-slate-700 dark:text-gray-400 '>
                          “Hello, I’m Arnob! I’m a software engineer with a
                          passion for creating innovative applications. You can
                          see more of my work on my Github profile. I’m always
                          looking for new challenges and opportunities to learn
                          and grow.”
                        </p>

                        <div class='flex items-center mt-8 -mx-2'>
                          <img
                            class='object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-teal-300 dark:ring-gray-700'
                            src='https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                            alt=''
                          />

                          <div class='mx-2'>
                            <h1 class='font-semibold text-gray-800 dark:text-white'>
                              Arnob{" "}
                            </h1>
                            <span class='text-sm text-slate-500 dark:text-gray-400'>
                              Opensource Programmer
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>

              
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
