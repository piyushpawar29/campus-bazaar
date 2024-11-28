"use client";
import './globals.css';
import React,{ useState, useEffect, useRef }  from 'react';
import Layout from './components/layout'; 
import { IoIosStar,IoIosBook,IoIosPhonePortrait,IoIosHome,IoIosShirt,IoIosBasketball,IoIosCreate,IoIosApps } from 'react-icons/io';
import { IoMdPricetag } from "react-icons/io";
function MyApp({ Component, pageProps }) {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Mimics "cover 40%"
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  const handleCategoryClick = (category) => {
    window.location.href = `/pages/${category}`; 
  };
  return (
    <Layout>
      <div className="bg-black ">

        <div className='flex flex-row items-center justify-center'>
          <div className="w-full h-[calc(100vh-3rem)] flex bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
              <div className="w-1/2 flex flex-col p-8 pt-12">
                <h1 className="text-7xl font-serif z-10 relative">
                  The Student Exchange Hub:
                  <br />
                  Revive,Reuse,
                  <br />
                  Reinvent.<IoIosStar size="70" className="inline-block mr-2 pb-2 pt-0" color='#FFD700' />
                </h1>
                <p className="text-4xl py-6 font-medium font-serif">Connecting Students Through a Circular Marketplace for Second-Hand Goods.</p>
              </div>
              <div className="w-1/2 flex items-center justify-center ">
                <img src="/home-vector.svg" alt="Smart Calculator" className="max-w-full max-h-full" />
              </div>
            </div>
        </div>

        <div className="h-[calc(100vh-10rem)] flex flex-row items-center justify-center bg-black">
          <div className="w-1/2 p-4 m-3 text-white bg-black">
            <h2 className="text-4xl text-white font-bold px-7 font-mono">
              Our Best Selling Product
              <br></br>Presenting: </h2>
              <h2 className="text-4xl text-white font-bold px-7 py-2 font-mono">Smart Calculator</h2>
              
            <p className="text-xl mt-2 px-7 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
            <button 
            className="bg-green-700 text-white px-9 py-3 rounded-md mt-4 ml-7 hover:bg-amber-500 hover:text-white hover:shadow-md hover:shadow-amber-500 transition ease-in-out duration-200" onClick={() => window.location.href = '/product/[id]'}>
              <b>Buy Now</b></button>
          </div>
          <div className="w-1/2">
            <img src="calculator.jpg.avif" alt="Product" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col bg-amber-500 bg-gradient-to-r from-amber-500 to-orange-600">
          <div className="container m-auto min-w-min">
            <h1 className="text-6xl font-bold text-center  text-white py-10 ">BROWSE CATEGORIES</h1>
          </div>
          <section className="grid grid-cols-4 gap-4 py-20 pt-0  px-20">
          {[
          { name: "Textbooks and Study Material", icon: <IoIosBook size={40}/> },
          { name: "Electronics and Gadgets", icon: <IoIosPhonePortrait size={40}/> },
          { name: "Furniture and Room Essentials", icon: <IoIosHome size={40}/> },
          { name: "Clothing and Accessories", icon: <IoIosShirt size={40}/> },
          { name: "Sports Equipment", icon: <IoIosBasketball size={40}/> },
          { name: "Stationery and Office Supplies", icon: <IoIosCreate size={40}/> },
          { name: "Tickets and Subscriptions", icon: <IoMdPricetag size={40}/> },
          { name: "Miscellaneous", icon: <IoIosApps size={40}/> }
        ].map((category, index) => (
          <div key={index} className="bg-white shadow md:hover:scale-105 border-amber-500 transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 p-1 align-center text-center aspect-video flex flex-col items-center justify-center rounded-md" onClick={() => router.push(`/shop?category=${category.name}`)}>
            <div className="flex items-center justify-center mb-2">{category.icon}</div>
            <h3 className="text-lg font-bold" onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </h3>
            
          </div>
))}
          </section>
        </div>

        <div className="flex flex-col bg-gray-100">
          <div className="container m-auto min-w-min">
            <h1 className="text-6xl font-bold text-center text-black py-10  ">POPULAR PRODUCTS</h1>
          </div>
          <section className="grid grid-cols-3 gap-4 pt-0 py-20 px-20">
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
              //${isVisible ? "animate-appear" : "opacity-0 scale-50"} 
              <div key={index} ref={divRef}
              className={`flex flex-col items-center justify-center bg-gradient-to-r from-white to-gray-200 shadow-md border p-4 rounded-md`}>
                <img src={product.src} alt={product.name} className="w-full h-44 object-cover rounded-t-md" />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-lg">{product.price}</p>
                <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-md transition ease-in-out duration-200 hover:shadow-md hover:shadow-amber-500 hover:bg-yellow-50 hover:text-black hover:scale-105">View Product</button>
              </div>
            ))}
          </section>
        </div>

      </div>
    </Layout>
  );
}
export default MyApp;

