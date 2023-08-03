import React from "react";
import Link from "next/link";
import Logo from "./SVG/Logo";
import BookMarkLogo from "./SVG/BookMarkLogo";
import MenuBarIcon from "./SVG/MenuBarIcon";

export default function navbar() {
  return (
    <nav className='glass_effect dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='w-full max-w-screen-xl p-4 flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
            <Logo/>
          <span className='ml-3 self-center text-2xl font-semibold whitespace-nowrap text-white'>
            minicss
          </span>
        </Link>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='text-slate-300 flex bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0'>
            CTRL + D{" "}
           <BookMarkLogo/>
          </button>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <MenuBarIcon/>
          </button>
        </div>
        <div
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 text-[15px] border border-gray-100 text-white rounded-lg md:flex-row md:space-x-3 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
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
