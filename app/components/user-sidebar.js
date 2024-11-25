"use client";
import React from "react";
import Link from "next/link";
import { IoIosSettings } from "react-icons/io";

export default function UserSidebar() {
  return (
    <aside className="w-1/5 bg-gray-200 dark:bg-gray-800 p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/user/profile" className="flex items-center gap-2 hover:underline">
            <IoIosSettings className="text-xl" />
            Profile Settings
          </Link>
        </li>
        <li>
          <Link href="/user/orders" className="hover:underline">Your Orders</Link>
        </li>
        <li>
          <Link href="/user/wishlist" className="hover:underline">Wishlist</Link>
        </li>
      </ul>
    </aside>
  );
}