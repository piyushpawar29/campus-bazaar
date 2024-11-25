"use client"
import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      setMessage(response.data.message);
      if (response.data.message === 'Login successful') {
        setEmail('');
        setPassword('');
        window.location.href = '/test/Dashboard'; 
      }
    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-amber-100">
      <img src="logo.svg" className="flex justify-center items-center mb-5" />
      <img src="name.png" className="flex justify-center items-center mb-5" />
      <div className="h-[500px] w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center mt-0 mb-7 ">
        
        <h3 className="text-2xl font-sans font-bold mb-5">Login to Your Account</h3>
        {message && <p className={`mb-4 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter Password" 
            required 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <button 
            type="submit" 
            className="w-full px-3 py-2 mt-4 bg-amber-500 hover:bg-white hover:text-amber-500 hover:border hover:border-amber-500 transition ease-in-out duration-200 hover:scale-105 hover:shadow-md hover:shadow-amber-500 text-white font-bold rounded-3xl"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <hr className="my-4" />
          <a href="/signup" className="text-amber-500 hover:text-amber-700 mb-0">Don't have an account?  Sign up</a>
        </div>
        <div className="mt-6">
          <a href="/signup" className="text-amber-500 hover:text-amber-700 mb-0">Forgot Password</a>
        </div>
        <div className="mt-6">
          <hr className="my-4" />
          <a href="/" className="text-amber-500 hover:text-amber-700 mb-0">Back to Home</a>
        </div>
      </div>
    </div>
  );
}