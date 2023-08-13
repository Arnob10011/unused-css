import React from 'react'
import uploadFolderImage from '../public/images/uploadFolderImage.png'
import exampleFolderTreeImage from '../public/images/exampleFolderTree.png'
import finishedFolderImage from '../public/images/finishedFolderImage.png'
import Image from 'next/image'

export default function UploadFolderHowItWorksTutorial() {
  return (
    <div className='mt-4 flex flex-col gap-4'>

    <p className='mb-4 flex-none'> Let's see the tutorial below </p>
    <p className=''>Example folder tree</p>
    <Image className='mb-2 m-auto'  src={exampleFolderTreeImage} />

    <p className='mb-2'>Firstly :</p>
    <Image className='rounded-sm mb-2' src={uploadFolderImage} />
    

    <p className='mt-2'>secondly : </p>
    <p className='mb-2'>The algorithm cleans the css file accourding to html or js file</p>


    <p>Thirdly :</p>
    <p>End Result</p>

    <Image className='mb-2 m-auto' src={finishedFolderImage}/>
    </div>
  )
}
