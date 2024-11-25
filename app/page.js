"use client";
import './globals.css';
import React from 'react';
import Layout from './components/layout'; // Make sure the import is correct
function MyApp({ Component, pageProps }) {
  const handleCategoryClick = (category) => {
    window.location.href = `/pages/${category}`; // Replace with your actual route
  };
  return (
    <Layout>
      <div className="bg-black pt-10">

        <div className="flex flex-row items-center justify-center bg-black">
          <div className="w-1/2 p-4 text-white bg-black">
            <h2 className="text-2xl text-white font-bold px-7">
              Our Best Selling Product
              <br></br>Presenting: <br></br>
              Smart Calculator</h2>
            <p className="mt-2 px-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
            <button className="bg-white text-black px-9 py-3 rounded-md mt-4 ml-7 hover:bg-amber-500 hover:text-white hover:shadow-md hover:shadow-amber-500 transition ease-in-out duration-200" onClick={() => window.location.href = '/product/[id]'}><b>Buy Now</b></button>
          </div>
          <div className="w-1/2 ">
            <img src="calculator.jpg.avif" alt="Product" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex flex-col bg-yellow-500">
        <div className="container m-auto min-w-min">
          <h1 className="text-6xl font-bold text-center  text-white py-10 bg-yellow-500 ">BROWSE CATEGORIES</h1>
        </div>
        <section className="grid grid-cols-4 gap-4 py-20 pt-0 bg-amber-500 px-20">
          {["Electronics", "Fashion", "Home", "Beauty", "Sports", "Toys", "Furniture", "Gaming"].map((category, index) => (
            <div key={index} className="bg-white shadow md:hover:scale-105 border-amber-500 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 p-1 align-center text-center aspect-video flex items-center justify-center rounded-md">
              <h3 className="text-lg font-bold" onClick={() => handleCategoryClick(category)}>{category}</h3>
            </div>
          ))}
        </section>
        </div>

          <div className="flex flex-col bg-white">
        <div className="container m-auto min-w-min">
          <h1 className="text-6xl font-bold text-center text-black py-10 bg-white ">POPULAR PRODUCTS</h1>
        </div>
        <section className="grid grid-cols-3 gap-4 pt-0 py-20 bg-white px-20">
          {[
            { name: "Apple Watch", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Sony Headphones", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Nike Shoes", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Samsung TV", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Canon Camera", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Apple AirPods", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Dell Laptop", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Samsung Refrigerator", price: "₹999.99", src: "calculator.jpg.avif" },
            { name: "Apple Macbook", price: "₹999.99", src: "calculator.jpg.avif" },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white shadow-md border p-4 rounded-md">
              <img src={product.src} alt={product.name} className="w-full h-44 object-cover rounded-t-md" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-lg">{product.price}</p>
              <button className="bg-black text-white font-bold py-2 px-4 rounded-md transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105">View Product</button>
            </div>
          ))}
        </section>
        </div>
      </div>
    </Layout>
  );
}
export default MyApp;