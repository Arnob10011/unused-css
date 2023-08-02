'use client'
import React from 'react'
import axios from 'axios'
import {useDropzone} from 'react-dropzone'
import { useCallback, useState, useEffect} from 'react'
import Link from 'next/link'


export default function UploadFolder() {
  
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

      const filesInfo = await readFileContents(files)
      console.log(filesInfo) 

     

    
      await axios.post('http://localhost:5000/api/uploadfiles', filesInfo, {
        headers: {
          'Content-Type': 'application/json'

        }
      })

    } catch (error) {
      console.error('Error reading files:', error);
    }
  }, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop files here, or click to select files</p>
        )}
      </div>

      <div>
  
        <Link href="http://localhost:5000/api/downloadcleanedcss">
          Download
        </Link>
      </div>
    </>
  );
}
