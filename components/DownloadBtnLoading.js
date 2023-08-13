import React from 'react'
import LightingIcon from './SVG/LightingIcon'
import BlackLoadingSpinner from './SVG/BlackLoadingSpinner'
export default function DownloadBtnLoading({isLoading, loader}) {
  return (
    <button disabled className='p-4 mt-4 flex bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-2xl text-white w-full'  href={'./zip/cleanedcss.zip'} download='cleanedcss.zip'>
    <div className='flex mx-auto'>
    {isLoading ? <p>Carregando</p> : <p>Vamos</p>}
    
    {isLoading ?  <BlackLoadingSpinner/> : <LightingIcon/>}
{/* loading....     */}
    </div>
      </button>
  )
}