"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='glass_effect dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='w-full max-w-screen-xl p-4 flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
          <svg
            id='logo-86'
            width='35'
            height='35'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='ccustom'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z'
              fill='#FFF'></path>
            <path
              className='ccustom'
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z'
              fill='#FFF'></path>
          </svg>
          <span className='ml-3 self-center text-2xl font-semibold whitespace-nowrap text-white'>
            minicss
          </span>
        </Link>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='text-slate-300 flex bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'>
            CTRL + D{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2.5'
              stroke='currentColor'
              class='w-5 h-5 ml-1'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-900 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={
            isNavExpanded
              ? "items-center justify-between w-full text-white bg-slate-700 mt-4 rounded-xl bg-opacity-50 md:flex md:w-auto md:order-1"
              : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          }
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-0 text-[15px] text-white rounded-lg md:flex-row md:space-x-3 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                href='/'
                className='block px-1 font-medium hover:text-slate-200 transition'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/how-it-works'
                className='block px-1 font-medium hover:text-slate-200 transition'>
                How it works?
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                className='block px-1 font-medium hover:text-slate-200 transition'>
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='block px-1 font-medium hover:text-slate-200 transition'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block px-1 font-medium hover:text-slate-200 transition'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
