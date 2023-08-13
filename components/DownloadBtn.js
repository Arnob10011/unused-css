import React from 'react'
import LightingIcon from './SVG/LightingIcon'
export default function DownloadBtn() {
  return (




<a className='p-4 mt-4 flex bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-2xl text-white w-full'  href={'./zip/cleanedcss.zip'} download='cleanedcss.zip'>
<div className='flex mx-auto'>
Vamos

<LightingIcon/>
</div>
  </a>
  )
}
