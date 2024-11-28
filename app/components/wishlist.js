"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/user/wishlist")
      .then((response) => {
        setWishlistItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
 
  // useEffect(() => {
  //   setWishlistItems(demoWishlistItems);
  //   setLoading(false);
  // })
  // const demoWishlistItems = [
  //   {
  //     id: 1,
  //     name: "Wishlist Product 1",
  //     images: [
  //       "/wishlist1.jpg",
  //       "/wishlist2.jpg",
  //     ],
  //     price: 49.99,
  //     description: "This is a wishlist product.",
  //     seller: "Wishlist Seller",
  //   },
  //   {
  //     id: 2,
  //     name: "Wishlist Product 2",
  //     images: [
  //       "/wishlist3.jpg",
  //       "/wishlist4.jpg",
  //     ],
  //     price: 79.99,
  //     description: "This is another wishlist product.",
  //     seller: "Wishlist Seller",
  //   },
  // ];

  if (loading) return <p className="text-center font-semibold mt-6">Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 m-5">
      <h2 className="text-3xl font-bold mb-4">Wishlist</h2>
      {wishlistItems.length > 0 ? wishlistItems.map((item) => (
        <div 
          key={item.id} 
          className="border p-4 rounded shadow-sm cursor-pointer" 
          onClick={() => window.location.href = `/product/${item.id}`}
        >
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <img src={item.images[0]} alt={item.name} className="w-full h-48 object-cover mb-2" />
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="font-semibold">Price: ${item.price}</p>
          <p className="text-sm text-gray-500">Seller: {item.seller}</p>
        </div>
      )) : <p>No items in wishlist</p>}
    </div>
  );
}
