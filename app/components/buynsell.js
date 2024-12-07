"use client";
import React from "react";
import { useRouter } from "next/navigation";
const BuyNSell = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      <div className="h-[350px] w-full max-w-md bg-gradient-to-tr from-cyan-50 via-cyan-100 to-cyan-200 rounded-2xl shadow-lg p-7 text-center mt-8 m-5 text-4xl flex justify-center items-center flex-col shadow-lg shadow-gray-400">
      <p className="font-sans text-2xl text-cyan-900">Do you want to buy or sell?</p>
      <button 
      onClick={() => router.push('/shop/all')}
      className="
      relative inline-block mx-20 py-4 px-8 text-white font-bold text-3xl text-center bg-gradient-to-r from-cyan-500 to-blue-500 w-1/2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out">
        {/* bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:scale-110 hover:bg-cyan-700 text-white font-bold py-5 px-5 m-5 rounded font-sans w-1/2">
       */}
        BUY
      </button>
      <button 
      onClick={() => router.push('/sell')}
      className="bg-gradient-to-r from-green-400 to-green-600 transition ease-in-out hover:scale-110 hover:bg-green-700 text-white font-bold py-5 px-5 m-5 rounded font-sans w-1/2">
        SELL
      </button>
      </div>
    </div>
  );
};

export default BuyNSell;
