"use client";
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { IoIosHeart, } from 'react-icons/io';
import { IoSearch } from "react-icons/io5";
import { SiSellfy } from "react-icons/si";
import { CgMoreO } from "react-icons/cg";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  return (
    <header className="bg-gray-800 shadow-md fixed w-full text-white ">
      <div className={`flex items-center justify-between mt-2 p-2 mb-2 ${!showMenu ? 'h-14' : 'flex-col h-32'} transition-height duration-300`}>
        <div className="flex items-center justify-between w-full">
          <img src="/logo.svg" alt="logo" className="h-14" />
          <img src="name.svg" className="md:h-200 flex justify-center items-center" />
          <button 
            onClick={() => setShowMenu(!showMenu)} 
            className="md:hidden p-2 border rounded-md hover:shadow-md hover:bg-teal-500 transition-all"
          >
            {showMenu ? <RxCross2 size="32" color="black" /> : <IoIosMenu size="32" color="black" />}
          </button>
        </div>
        <div className="flex items-center w-full md:w-3/4 md:ml-32">
            <input type="text" className="w-full md:w-3/4 px-3 py-2.5 rounded-md text-black bg-white border-2.5 border-gray-300 focus:outline-none focus:border-amber-800 transition-all duration-300" placeholder="Search" />
            <button type="submit" className="px-2 py-2 rounded-md hover:text-gray-800 hover:bg-gray-100 transition-all duration-300">
              <IoSearch size="29" className='text-white hover:text-gray-800 transition-all duration-200'/>
            </button>
        </div>
        <div className={`${!showMenu ? 'hidden md:flex' : 'flex'} w-full justify-center items-center md:flex ml-0 p-0 `}>
          <ul className="text-size-md flex flex-col md:flex-row md:items-center md:space-x-8 space-y-5 md:space-y-0 mt-5 p-2 md:mt-0 font-bold">
            <li><a href="/" onClick={() => setShowMenu(false)} className="hover:border p-2 rounded-md hover:text-black hover:bg-[#f5f5f5]  transition-all duration-300 ">Home</a></li>
            <li><a href="/signup" onClick={() => setShowMenu(false)} className="border p-2 rounded-md hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 whitespace-nowrap">Sign up</a></li>
            <li><a href="/login" onClick={() => setShowMenu(false)} className="hover:border p-2 rounded-md hover:text-black hover:bg-[#f5f5f5]  transition-all duration-300">Login</a></li>
            <li>
              <a href="/wishlist" onClick={() => setShowMenu(false)} className="hover:text-black transition-all">
                <button className="p-1 border rounded-md hover:text-gray-800 hover:bg-white transition-all">
                  <IoIosHeart size="32" className='text-white hover:text-gray-800 transition-all' />
                </button>
              </a>
            </li>
            <li>
              <a href="/sell" onClick={() => setShowMenu(false)} className="hover:text-black transition-all">
                <button className="p-1 border rounded-md hover:bg-white transition-all hover:text-gray-800">
                  <SiSellfy size="32"  className='text-white hover:text-gray-800 transition-all'
                  />
                </button>
              </a>
            </li>
            <li>
              <div className="relative">
                <button
                  className="p-1 border rounded-md hover:bg-white transition-all hover:text-gray-800"
                  onClick={() => setShowDropdownMenu((prev) => !prev)}
                >
                  <CgMoreO size="32" className='text-white hover:text-gray-800 transition-all' />
                </button>
                {showDropdownMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-md">
                    <ul className="py-2">
                      <li>
                        <a
                          href="/profile"
                          onClick={() => setShowDropdownMenu(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile"
                          onClick={() => setShowDropdownMenu(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href="/logout"
                          onClick={() => setShowDropdownMenu(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          Logout
                        </a>
                      </li> 
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
