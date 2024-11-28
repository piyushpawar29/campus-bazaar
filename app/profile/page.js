"use client";
import React, { useState } from "react";
import Link from "next/link";
import ProductList from "../components/orders";
import ChangePassword from "../components/changepassword";
import EditProfile from "../components/editprofile";
import Wishlist from "../components/wishlist";
import Layout from "../components/layout";
import { IoIosHeart } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";

function UserSidebar({ setActiveComponent }) {
  return (
    <aside className="w-full bg-gray-800 dark:bg-gray-800 p-7 min-h-screen mb-0">
      <div className="flex text-white flex-col space-y-2">
        <h2 className="text-2xl font-bold m-4 mb-2">My Account</h2>
        <h2 className="text-2xl font-bold m-4 mt-2 py-2 pt-0">Welcome, John Doe</h2>
        <div className="m-4 text-black grid gap-2 grid-cols-1">
          <button
            onClick={() => setActiveComponent("productList")}
            className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded"
          >
            <BsBoxSeamFill className="inline-block justify-center" /> My Orders
          </button>
          <button
            onClick={() => setActiveComponent("wishlist")}
            className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded"
          >
            <IoIosHeart className="inline-block justify-center" /> Favorites
          </button>
          <button
            onClick={() => setActiveComponent("editProfile")}
            className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded"
          >
            <MdEdit className="inline-block justify-center" /> Edit Profile
          </button>
          <button
            onClick={() => setActiveComponent("changePassword")}
            className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded"
          >
            <FaLock className="inline-block justify-center" /> Change Password
          </button>
          <Link
            href="/signout"
            className="p-3 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded"
          >
            <PiSignOutBold className="inline-block justify-center" /> Sign Out
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default function UserPage() {
  const [activeComponent, setActiveComponent] = useState("productList"); // Default to 'My Orders'

  return (
    <Layout>
      <div className="flex flex-row min-h-screen">
        
        <aside className="w-1/5">
          <UserSidebar setActiveComponent={setActiveComponent} />
        </aside>

        <main className="flex-1 p-6">
          {activeComponent === "productList" && <ProductList />}
          {activeComponent === "wishlist" && <Wishlist />}
          {activeComponent === "editProfile" && <EditProfile />}
          {activeComponent === "changePassword" && <ChangePassword />}
        </main>
      </div>
    </Layout>
  );
}