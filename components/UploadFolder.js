'use client'
import React from 'react'
import axios from 'axios'
import {useDropzone} from 'react-dropzone'
import { useCallback, useState, useEffect} from 'react'
import UploadToCloudIcon from './SVG/UploadToCloudIcon'
import LightingIcon from './SVG/LightingIcon'


export default function UploadFolder() {

  const [downloadLink, setDownloadLink] = useState('');
  const [loader, setLoader] = useState('')
  const [fileInfoEl, setFileInfo] = useState([])
  
  // reads file 
  async function readFileAsync(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        resolve(e.target.result);
      };
  
      reader.onerror = (e) => {
        reject(e);
      };
  
      reader.readAsText(file);
    });
  }


  async function readFileContents(files){

    const fileInfo = [];

    const fileReadingPromises = files.map(async (file) => {
      const largeFiles = file.path.includes('node_modules');
      if (!largeFiles) {
        const content = await readFileAsync(file);
        fileInfo.push({
          path: file.path,
          name: file.name,
          size: file.size,
          type: file.type,
          content: content,
        });
      }
    });
  
    await Promise.all(fileReadingPromises);
    return fileInfo

  }





  const onDrop = useCallback(async (files) => {
    try {

      const f = await readFileContents(files)
      console.log(f)
      console.log('client post')
      const response = await axios.post('/api/upload-folder', f, {
        headers: {
          'Content-Type': 'application/json'

        }
      })
      // setFileInfo(f)
      setDownloadLink(response.data);
      

    } catch (error) {
      console.error('Error reading files:', error);
    }
  }, []);


  useEffect(() => {

  async function getDownloadLink(){
    
    console.log('client get')
    const res = await axios.get(downloadLink)
    setLoader(res.data)

}

  
 if(downloadLink.length > 0){
  getDownloadLink()
  setDownloadLink('')
 }

 
    
  }, [downloadLink])




  const { getRootProps, getInputProps} = useDropzone({ onDrop });


  return (
    <>
    <div {...getRootProps()}>
    <div className='flex items-center justify-center w-full'>
      <label
        className='flex flex-col items-center justify-center w-full h-64 border-2 border-slate-500 rounded-2xl cursor-pointer glass_effect_box'>
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <UploadToCloudIcon/>
          <p className='mb-2 text-sm text-slate-600'>
            <span className='font-semibold'>
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className='text-xs text-slate-600'>
          HTML, CSS, JS Or Other files
          </p>
        </div>
        {/* <input
          {...getInputProps()}
          type='file'
          className='hidden'
        /> */}
      </label>

</div>


  </div>

{/* work here */}
{loader && (
  <a className='p-4 mt-4 flex bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-2xl text-white w-full'  href={'./zip/cleanedcss.zip'} download='cleanedcss.zip'>
  <div className='flex mx-auto'>
  Vamos
  
  <LightingIcon/>
  </div>
    </a>
)}


</>
  )
}
