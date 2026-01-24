"use client";
import React, { useState } from "react";
import RocketIcon from "./SVG/RocketIcon";
import axios from "axios";

export default function Form() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleHTMLCSSJS(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const jsonData = {
      html: e.target.html.value,
      css: e.target.css.value,
      js: e.target.js.value,
    };

    // Validation
    if (!jsonData.css || jsonData.css.trim() === '') {
      setError('CSS field is required');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/formcleaner', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data && res.data.css) {
        setResult(res.data);
        console.log('Result:', res.data);
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || error.message || 'Error processing CSS');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleHTMLCSSJS}>
        <textarea
          className='w-full placeholder-slate-600 p-5 h-40 bg-transparent border-4 rounded-2xl glass_effect_box'
          name='html'
          placeholder='Markup'></textarea>
        <textarea
          className='w-full placeholder-slate-600 p-5 my-3 h-40 bg-slate-500 border-4 rounded-2xl glass_effect_box'
          name='css'
          placeholder='Stylesheet'></textarea>
        <textarea
          className='w-full placeholder-slate-600 p-5 my-3 h-40 bg-slate-500 border-4 rounded-2xl glass_effect_box'
          name='js'
          placeholder='Script'></textarea>

        <button
          type='submit'
          disabled={loading}
          className='p-4 flex bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 rounded-2xl text-white w-full disabled:opacity-50'>
          <div className='flex mx-auto'>
            {loading ? 'Processing...' : "Let's go"}
            <RocketIcon />
          </div>
        </button>
      </form>

      {/* Display Results */}
      {error && (
        <div className='mt-4 p-4 bg-red-500 text-white rounded-2xl'>
          <p>Error: {error}</p>
        </div>
      )}

      {result && (
        <div className='mt-6 p-6 bg-slate-700 rounded-2xl glass_effect_box'>
          <h3 className='text-white text-lg font-semibold mb-4'>Cleaning Results</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
            <div className='bg-slate-600 p-4 rounded-lg'>
              <p className='text-slate-300 text-sm'>Original Size</p>
              <p className='text-white text-xl font-bold'>{result.originalCssSize} bytes</p>
            </div>
            <div className='bg-slate-600 p-4 rounded-lg'>
              <p className='text-slate-300 text-sm'>Cleaned Size</p>
              <p className='text-white text-xl font-bold'>{result.cleanedCssSize} bytes</p>
            </div>
            <div className='bg-slate-600 p-4 rounded-lg'>
              <p className='text-slate-300 text-sm'>Size Reduction</p>
              <p className='text-xl font-bold text-green-400'>{result.reduction}%</p>
            </div>
          </div>

          <p className='text-slate-300 text-sm mb-2'>Cleaned CSS:</p>
          <textarea
            className='w-full placeholder-slate-600 p-3 h-40 bg-slate-500 border-2 rounded-lg text-white text-xs overflow-auto'
            readOnly
            value={result.css}></textarea>

          <button
            onClick={() => {
              navigator.clipboard.writeText(result.css);
              alert('CSS copied to clipboard!');
            }}
            className='mt-4 px-4 py-2 bg-gradient-to-t from-slate-900 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white rounded-lg'>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}
