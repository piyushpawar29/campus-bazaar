"use client";
import React from "react";
import Link from "next/link";
import { IoIosHeart, IoIosReorder, IoIosSettings } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { useState } from "react";
export default function UserSidebar() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <aside className="w-full bg-gray-800  dark:bg-gray-800 p-7 h-screen mb-0">
      <div className="flex text-white flex-col space-y-2">
        <h2 className="text-2xl font-bold m-4 mb-2"> My Account</h2>
        <h2 className="text-2xl font-bold m-4 mt-2 py-2 pt-0"> Welcome,John Doe</h2>
        <div className="m-4 text-black grid gap-2 grid-cols-1">
          <button onClick={() => setActiveComponent('product-list')} className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded">
            <BsBoxSeamFill className="inline-block justify-center" /> My Orders
          </button>
          <button onClick={() => setActiveComponent('wishlist')} className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded">
            <IoIosHeart className="inline-block justify-center" /> Favorites
          </button>
          <button onClick={() => setActiveComponent('editProfile')} className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded">
            <MdEdit className="inline-block justify-center" /> Edit Profile
          </button>
          <button onClick={() => setActiveComponent('changePassword')} className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded">
          <FaLock className="inline-block justify-center" /> Change Password
          </button>
          <Link href="/signout" className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded">
            <PiSignOutBold className="inline-block justify-center" /> Sign Out
          </Link> 
        </div>
      </div>
    </aside>
  );
}