"use client"
import React, { useState } from "react";
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        username,
        email,
        password,
        confirmPassword
      });

      setMessage(response.data.message);
      if (response.data.message === 'Signup successful') {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        window.location.href = '/test/Login'; 
      }
    } catch (error) {
      console.error(error);
      setMessage('Error signing up');
    }
  };
//style={{ backgroundImage: 'url("/name.svg")',  }}
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-amber-100">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      <div className="h-[450px] w-full max-w-md bg-white rounded-2xl shadow-lg p-7 text-center mt-0 m-5 ">
        
        <h3 className="text-2xl font-sans font-bold mb-5">Create Your Account</h3>
        {message && <p className={`mb-4 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="username" 
            placeholder="Create Username" 
            required 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Create Password" 
            required 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <input 
            type="password" 
            name="confirm-password" 
            placeholder="Confirm Password" 
            required 
            value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <button 
            type="submit" 
            className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-amber-300 to-orange-600 hover:from-white  hover:bg-white hover:text-amber-500 hover:border hover:border-amber-500 transition ease-in-out duration-400 hover:scale-105 hover:shadow-sm hover:shadow-amber-500 text-white font-bold rounded-3xl"
          
          >
            Register
          </button>
        </form>
        <div className="mt-6">
          <hr className="my-4" />
          <a href="/login" className="text-amber-500 hover:text-amber-700 mb-0">Already signed up?  Log in</a>
        </div>
      </div>
    </div>
  );
}