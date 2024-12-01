"use client";
import './globals.css';
import React from 'react';
import Layout from './components/layout'; 
import { IoIosStar, IoIosBook, IoIosPhonePortrait, IoIosHome, IoIosShirt, IoIosBasketball, IoIosCreate, IoIosApps } from 'react-icons/io';
import { IoMdPricetag } from "react-icons/io";
import { useRouter } from 'next/navigation';
import axios from 'axios';

function MyApp() {
  const router = useRouter();

  const categories = [
    { name: "Textbooks and Study Material", icon: <IoIosBook size={40} /> },
    { name: "Electronics and Gadgets", icon: <IoIosPhonePortrait size={40} /> },
    { name: "Furniture and Room Essentials", icon: <IoIosHome size={40} /> },
    { name: "Clothing and Accessories", icon: <IoIosShirt size={40} /> },
    { name: "Sports Equipment", icon: <IoIosBasketball size={40} /> },
    { name: "Stationery and Office Supplies", icon: <IoIosCreate size={40} /> },
    { name: "Tickets and Subscriptions", icon: <IoMdPricetag size={40} /> },
    { name: "Miscellaneous", icon: <IoIosApps size={40} /> },
  ];
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        const shuffledProducts = response.data.sort(() => 0.5 - Math.random());
        setProducts(shuffledProducts.slice(0, 8));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // const products = [
  //   { name: "Apple Watch", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Sony Headphones", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Nike Shoes", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Samsung TV", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Canon Camera", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Apple AirPods", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Dell Laptop", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Samsung Refrigerator", price: "₹999.99", src: "calculator.jpg.avif" },
  //   { name: "Apple Macbook", price: "₹999.99", src: "calculator.jpg.avif" },
  // ];

  return (
    <Layout>
      <div className="bg-black">
        {/* Landing Section */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[calc(100vh-3rem)] flex bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
            <div className="w-1/2 flex flex-col p-8 pt-12">
              <h1 className="text-7xl font-serif z-10 relative">
                The Student Exchange Hub:
                <br />
                Revive, Reuse,
                <br />
                Reinvent.
                <IoIosStar size={70} className="inline-block mr-2 pb-2" color="#FFD700" />
              </h1>
              <p className="text-4xl py-6 font-medium font-serif">
                Connecting Students Through a Circular Marketplace for Second-Hand Goods.
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="/home-vector.svg" alt="Smart Calculator" className="max-w-full max-h-full" />
            </div>
          </div>
        </div>

        {/* Best Product Section */}
        <div className="h-[calc(100vh-12rem)] flex items-center justify-center ">
          <div className="w-1/2 p-4 text-white bg-gradient-to-r from-gray-800 to-black h-full py-14">
            <h2 className="text-4xl font-bold px-7 font-mono">
              Our Best Selling Product
              <br /> Presenting:
            </h2>
            <h2 className="text-4xl font-bold px-7 py-2 font-mono">Smart Calculator</h2>
            <p className="text-xl mt-2 px-7 py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.
            </p>
            <button
              className="bg-green-700 text-white px-9 py-3 rounded-md mt-4 ml-7 hover:bg-amber-500 hover:shadow-md transition ease-in-out duration-200"
            >
              <b>Buy Now</b>
            </button>
          </div>
          <div className="w-1/2 bg-black">
            <img src="calculator.jpg.avif" alt="Product" className="max-w-full max-h-full" />
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col bg-gradient-to-r from-amber-500 to-orange-600">
          <h1 className="text-6xl font-bold text-center text-white py-10">BROWSE CATEGORIES</h1>
          <section className="grid grid-cols-4 gap-4 py-10 px-20">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:scale-105 border-amber-500 transition ease-in-out duration-200 hover:shadow-lg p-4 text-center flex flex-col items-center justify-center rounded-md"
                onClick={() => router.push(`/shop?category=${category.name}`)}
              >
                <div className="mb-2">{category.icon}</div>
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
            ))}
          </section>
        </div>

        {/* Popular Products Section */}
        <div className="flex flex-col bg-gray-100">
          <h1 className="text-6xl font-bold text-center text-black py-10">POPULAR PRODUCTS</h1>
          <section className="grid grid-cols-3 gap-4 px-20 py-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="border border-black p-4 rounded-xl flex flex-col items-center justify-center"
              >
                <img src={product.src} alt={product.name} className="w-full h-44 object-cover rounded-t-xl" />
                <h3 className="text-xl font-bold font-sans">{product.name}</h3>
                
                <div className="flex justify-between items-start py-1 w-full">
                  <p className="text-xl font-semibold">{product.price}</p>
                  <div className="flex flex-col items-end">
                    <p className="text-sm">{product.location}</p>
                    <p className="text-xs">{product.date}</p>
                  </div>
                </div>
                <button 
                onClick={() => router.push(`/product/${product.id}`)}
                className="bg-green-700 text-white w-full font-bold py-2 px-3 rounded-xl hover:shadow-lg hover:bg-yellow-50 hover:text-black hover:scale-105 transition ease-in-out duration-200">
                  View Product
                </button>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default MyApp;