import React from "react";
import {useState} from "react";

import {close, logo, menu} from '../assets'
import {navLinks} from "../constants/index.js";

export default function Navbar()
{

  const [nav,setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
             <img src={logo} alt={''} className='w-[124px] h-[32px]'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`text-white cursor-pointer ${index === navLinks.length - 1? 'mr-0' : 'mr-10'}`}> <a href={`${nav.id}`}> {nav.title} </a> </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center' onClick={handleNav}>
              <img src = {nav? close : menu}
              alt={'menu'}
              className='w-[20px] h-[20px] object-contain'/>

        <div className={`${nav ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
                 {navLinks.map((nav,index) => (
                   <li key={nav.id} className={`text-white cursor-pointer font-medium ${index === navLinks.length - 1? 'mr-0' : 'mb-4'}`}> <a href={`${nav.id}`}> {nav.title} </a> </li>
                 ))}
               </ul>
        </div>
      </div>
    </nav>
  );
}
