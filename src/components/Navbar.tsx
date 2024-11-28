'use client'
import Link from 'next/link'
import Image from 'next/image'

import React, { useState } from 'react'

function Navbar() {
const [isOpen, setIsOpen]= useState(false)
  return ( 
  <div>
    <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-500 top-0 left-0 right-0 fixed z-10 ">
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex  md:px-8'>
  
      <div className= 'flex  justify-between py-3 md:py-5 md:block items-center'>
        <Link href={"/"}>
        <h2 className='text-2xl text-gray-900 font-bold'>LOGO</h2>
        </Link>

        {/* buger button for moblie */}

        <div className='md:hidden'>
          <button
          className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
          onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Image src={'/close.png'} alt="close"  width={30} height={30}/>
            )
            :
            (
              <Image src={'/burger-menu.png'} alt="menu" width={30} height={30}
              className='focus:border-none active:border-none'
              />
            )}
          </button>
        
        </div>
        </div>
      
      <div>
        <div className={`bg-blue-500
         flex
         w-[200px] md:w-0
         absolute md:relative
         justify-center
         items-center
         pb-3
         mt-0
         md:mr-[150px]
         md:block
         md:pb-0
         md:mt-0
        ${ isOpen ? 'p-12 md:p-0 block' :'hidden'
       }`}
       >
        <ul className='w-full h-[220px] md:h-auto items-center justify-center md:flex'>
          <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-700 border-purple-900 md:hover:text-purple-900 md:hover:bg-transparent'>
            <Link href={"/"} onClick={() => setIsOpen(!isOpen)}>
            Home
            </Link>
            </li>
          <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600  border-purple-800 md:hover:text-purple-900 md:hover:bg-transparent'>
            <Link href={"/"} onClick={() => setIsOpen(!isOpen)}>
            About
            </Link>
            </li>
          <li className='pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600  border-purple-700 md:hover:text-purple-900 md:hover:bg-transparent'>
            <Link href={"/"} onClick={() => setIsOpen(!isOpen)}>
            Contact
            </Link>
            </li>

        </ul>
</div>
        </div>
      </div>
      </nav>
    </div>
    
)
}
export default Navbar