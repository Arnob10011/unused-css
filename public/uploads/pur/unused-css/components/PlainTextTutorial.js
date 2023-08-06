import React from 'react'
import plainTextImage from '@/public/images/plainTextImage.png'
import popupdownload from '@/public/images/popupdownload.png'

import Image from 'next/image'

export default function PlainTextTutorial() {
  return (
    <div className='mt-4'>


        <p className='mb-6'>Let's see the tutorial below</p>
        <Image className='mb-2 m-auto rounded-sm' src={plainTextImage}/>

        <p className='mb-3 mt-4'>Finally the code will filter the unused css and send the code to you via a cool popup</p>
        <Image className='rounded-sm' src={popupdownload}/>
        
    </div>
  )
}
