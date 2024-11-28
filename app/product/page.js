"use client";
import Layout from "../components/layout";
import Image from "next/image";
import { IoIosContact, IoIosHeart } from "react-icons/io";
import { BsPaypal, BsStripe } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Demo Product",
    images: [
      "/calculator.jpg.avif",
      "/product1.jpg",
      "/calculator2.jpeg",
      "/calculator.webp",
      "/calculator4.webp",
      "/calculator5.png",
    ],
    price: 99.99,
    description: "This is a demo product. It is not a real product and cannot be purchased.",
    seller: "Demo Seller",
  };
  return (
    <Layout>
      <nav className="flex gap-1 text-sm m-5 mb-2 font-sans">
          <a href="/" className="hover:underline">Home</a>
          <span className="text-gray-400">&rsaquo;</span>
          <a href="/product" className="hover:underline">Products</a>
          <span className="text-gray-400">&rsaquo;</span>
          <a href={`/product/${product.id}`} className="hover:underline">{product.name}</a>
        </nav>
      <div className="flex flex-row gap-4 m-auto justify-center">
        
        <div className="w-1/2">
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-md p-2 hover:bg-gray-200"
              onClick={() => {
                const slider = document.getElementById("slider");
                slider.scrollLeft -= slider.offsetWidth;
              }}
            >
              &larr;
            </button>
            <div
              id="slider"
              className=" h-[calc(100vh-12rem)] overflow-x-auto whitespace-nowrap scroll-smooth"
            >
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.name}
                  className="w-full h-full object-cover inline-block"
                  width={500}
                  height={500}
                />
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-md p-2 hover:bg-gray-200"
              onClick={() => {
                const slider = document.getElementById("slider");
                slider.scrollLeft += slider.offsetWidth;
              }}
            >
              &rarr;
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 ml-1 mt-12">
          <h2 className="text-3xl font-extrabold">{product.name}</h2>
          <p className="text-3xl font-bold text-amber-500">${product.price}</p>
          <p>{product.description}</p>
          <p>
            Sold by: <span className="font-bold">{product.seller}</span>
          </p>
          <button className="bg-black text-white text-xl px-4 py-3 w-1/3 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105 rounded-md flex items-center gap-2">
            <IoIosContact className="text-xl" />
            Contact Seller
          </button>
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105 rounded-md">
              
              <FaShareAlt className="text-xl" />
            </button>
            <button className="bg-black text-white px-4 py-3 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105 rounded-md">
              <IoIosHeart className="text-xl" />
            </button>
          </div>
          <p className="font-bold">Payment Options:</p>
          <div className="flex gap-2">
            <BsPaypal className="text-3xl" />
            <BsStripe className="text-3xl" />
          </div>
        </div>
      </div>
    </Layout>
  );
}