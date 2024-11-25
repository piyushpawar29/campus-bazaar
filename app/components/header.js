"use client";
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { IoIosHeart, IoIosCart, IoIosSettings } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  

  return (
    <header className="bg-amber-500 shadow-md fixed w-full top-0 text-white ">
      <div className={`flex items-center justify-between p-5 ${!showMenu ? 'h-24' : 'flex-col h-72'} transition-height duration-300`}>
        <div className="flex items-center justify-between w-full">
          <img src="/logo.svg" alt="logo" className="h-24 w-24 " />
          <img src="name.png" className="flex justify-center items-center" />
          <button 
            onClick={() => setShowMenu(!showMenu)} 
            className="md:hidden p-2 border rounded-md hover:shadow-md hover:bg-teal-500 transition-all"
          >
            {showMenu ? <RxCross2 size="32" color="black" /> : <IoIosMenu size="32" color="black" />}
          </button>
        </div>
        <div className="flex items-center w-80% md:w-1/2 md:ml-32">
            <input type="text" className="w-full md:w-3/4 mr-0 px-3 py-2 rounded-md text-black bg-white border-2 border-gray-300 focus:outline-none focus:border-amber-800 transition-all duration-300" placeholder="Search" />
            <button type="submit" className="px-4 py-2 rounded-md  text-black hover:bg-amber-700 transition-all duration-300">
              <BsSearch size="24" color="white" />
            </button>
        </div>
        <div className={`${!showMenu ? 'hidden md:flex' : 'flex'} w-full justify-center items-center md:flex ml-0 p-0 `}>
          <ul className="text-size-lg flex flex-col md:flex-row md:items-center md:space-x-8 space-y-5 md:space-y-0 mt-5 p-2 md:mt-0 text-lg font-bold">
            <li><a href="/" onClick={() => setShowMenu(false)} className="hover:border p-2 rounded-md hover:text-black hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 hover:shadow-md">Home</a></li>
            <li><a href="/signup" onClick={() => setShowMenu(false)} className="border p-2 rounded-md hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 hover:shadow-md whitespace-nowrap">Sign up</a></li>
            <li><a href="/login" onClick={() => setShowMenu(false)} className="hover:border p-2 rounded-md hover:text-black hover:bg-[#f5f5f5] hover:text-black transition-all duration-300 hover:shadow-md">Login</a></li>
            <li>
              <a href="/wishlist" onClick={() => setShowMenu(false)} className="hover:text-black hover:text-xl transition-all">
                <button className="p-1 border rounded-md hover:shadow-md hover:bg-white transition-all">
                  <IoIosHeart size="32" color="black" />
                </button>
              </a>
            </li>
            <li>
              <a href="/cart" onClick={() => setShowMenu(false)} className="hover:text-black hover:text-xl transition-all">
                <button className="p-1 border rounded-md hover:shadow-md hover:bg-white transition-all">
                  <IoIosCart size="32" color="black" />
                </button>
              </a>
            </li>
            
            <li>
              <div className="relative">
                <button
                  className="p-1 border rounded-md hover:shadow-md hover:bg-white transition-all"
                  onClick={() => setShowDropdownMenu((prev) => !prev)}
                >
                  <IoIosMenu size="32" color="black" />
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
                          href="/orders"
                          onClick={() => setShowDropdownMenu(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href="/settings"
                          onClick={() => setShowDropdownMenu(false)}
                          className="block px-4 py-2 text-black hover:bg-gray-100"
                        >
                          Settings
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