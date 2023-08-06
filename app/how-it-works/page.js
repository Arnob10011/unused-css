import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import HowItWork from "@/components/HowItWork";
import UploadFolderHowItWorksTutorial from "@/components/UploadFolderHowItWorksTutorial";
import PlainTextTutorial from "@/components/PlainTextTutorial";

export default function HowItWorks() {
  return (
    <div>
      <div className='bg-svg'>
        <Navbar />
        <section class='min-h-[94vh]'>
          <div className='pt-40 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div class='glass_effect py-6 sm:py-8 lg:py-12 rounded-2xl'>
              <div class='mx-auto max-w-screen-2xl px-4 md:px-8'>
                <div class='mb-10 md:mb-16'>
                  <h2 class='mb-4 text-center text-2xl font-bold text-white  md:mb-6 lg:text-3xl'>
                    How it works?
                  </h2>

                  <p class='mx-auto max-w-screen-md text-center text-slate-600 md:text-lg'>

                     There are two ways you can filter out your unused css file and 
                     get a cleaner version of css . First one is, Upload Folder. In upload folder 
                     you can upload your folder  or file . The second one is simple text filter for html, 
                     css and js. Lets learn who to use this two type of ways to
                     filter out your css code 🙂🙃   
                  </p>
                </div>

                <div class='grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3 grid-flow-row'>
                 <HowItWork  
                 type={'Upload Folder'}
                typeHeader={'How does the Upload Folder works ?'}
                text='Upload Folder is a very powerful way to clean all you unused css 
                code in one shot. You just have to one thing, That is to upload your
                project in this section . Then it will automatically locate you css 
                file from the folder tree and will clean it and send it to you
                with the same folder you provided in a zip file.
                If the projects contains other files like (python, php, etc) will
                be ignored and send it to you where it was before in the folder tree,
                So that your project does not break.'
                tutorial={<UploadFolderHowItWorksTutorial/>} 
                />
                <HowItWork 
                type={'Plain Text'} 
                typeHeader={'How does the Plain Text works ?'} 
                text='Plain text section is for BASIC USE. You just have to paste you 
                html, css or js code over here. You can also paste html and css . Or html and 
                js Or Three of them together. But css is a must.'
                tutorial={<PlainTextTutorial/>}
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
