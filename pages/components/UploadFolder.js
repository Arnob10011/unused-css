'use client'
import React from 'react'
import axios from 'axios'
import {useDropzone} from 'react-dropzone'
import { useCallback, useState, useEffect} from 'react'
import Link from 'next/link'
export default function UploadFolder() {


    const readFiles = (files) => {
        return new Promise((resolve, reject) => {
          const fileInfos = [];
          let filesProcessed = 0;
      
          const handleLoad = (file, content) => {
            fileInfos.push({
              path: file.path,
              name: file.name,
              size: file.size,
              type: file.type,
              content: content,
            });
      
            filesProcessed++;
      
            if (filesProcessed === files.length) {
              resolve(fileInfos);
            }
          };
      
          files.forEach((file) => {
            const fileReader = new FileReader();
      
            fileReader.onload = (e) => {
              handleLoad(file, e.target.result);
            };
      
            fileReader.onerror = (e) => {
              reject(e);
            };
      
            fileReader.readAsText(file);
          });
        });
      };
    
    
    
    
    
    
    
      const onDrop = useCallback(async (files) =>  {
        const fileInfo = await readFiles(files)
    
       await axios.post('http://localhost:5000/api/uploadfiles', fileInfo, {
        headers: {
          'Content-Type': 'application/json'
        }
       })
      })
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
       <>
       
       <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
          <input {...getInputProps()} />
          {
            isDragActive ?
            <p>Drop the files here...</p> :
            <p>Drag and drop files here, or click to select files</p>
          }
        </div>
    
        <div>
        <Link href="http://localhost:5000/api/downloadcleanedcss">
          Download 
        </Link>
        </div>
    
    
    
    
       
       </>
      )
}
