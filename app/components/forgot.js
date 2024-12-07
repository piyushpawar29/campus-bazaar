"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/forgotpassword', { email });
      setMessage(response.data.message);
      if (response.data.message === 'Email sent') {
        setEmail('');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error sending email');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      <div className="h-[400px] w-full max-w-md bg-white rounded-2xl shadow-lg p-7 text-center mt-0 m-5 ">
        <h3 className="text-2xl font-sans font-bold mb-5">Forgot Password</h3>
        {message && <p className={`mb-4 ${message.includes('sent') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <button 
            type="submit" 
            className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:scale-105 transition ease-in-out hover:shadow-md hover:shadow-cyan-300 text-white font-bold rounded-3xl"
          >
            Send Email
          </button>
          <div className="mt-6">
          <hr className="my-4" />
          <a href="/signup" className="text-cyan-500 hover:text-cyan-700 mb-0">Don't have an account?  Sign up</a>
        </div>
          <div className="mt-6">
          <hr className="my-4" />
          <a href="/" className="text-cyan-500 hover:text-cyan-700 mb-0">Back to Home</a>
        </div>
        </form>
      </div>
    </div>
  );
}
