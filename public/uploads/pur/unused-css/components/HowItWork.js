import React from 'react'

export default function HowItWorks({type, typeHeader ,text, tutorial}) {
  return (
    <div class='relative rounded-lg glass_effect p-5 pt-8'>
    <span class='absolute -top-4 left-4 inline-flex rounded-full h-9 w-32 items-center justify-center  bg-slate-800 text-white'>
 
      <h4 className='text-sm max-w-xs truncate p-4'>{type}</h4>
      
    </span>

    <h3 class='mb-3 text-lg font-semibold text-slate-800 md:text-xl'>
      {typeHeader}
    </h3>
    <p class='text-slate-500 text-base leading-7'>
      {text}
    </p>
    {tutorial}
  </div>

  )
}
