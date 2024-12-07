"use client"
import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
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
      setMessage('Loading...');
      setTimeout(() => {
        setMessage(response.data.message);
        if (response.data.message === 'Signup successful') {
          router.push('/login');
          setUsername('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          
        }
      }, 2000); 
    } catch (error) {
      console.error(error);
      setMessage('Error signing up');
    }
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      <div className="h-[450px] w-full max-w-md bg-white rounded-2xl shadow-lg p-7 text-center mt-0 m-5 shadow-gray-400">
        <h3 className="text-2xl font-sans font-bold mb-3">Create Your Account</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
        {message && <p className={`mb-1 ${message.includes('successful' || 'Loading') ? 'text-green-500' : 'text-red-500'} font-bold`}>{message}</p>}
          <div className="relative">
            <input 
              type="text" 
              name="username" 
              placeholder="Enter Username" 
              required 
              value={username} 
              onChange={e => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300  rounded-3xl focus:outline-none focus:border-cyan-500"
            />
            <label className={`absolute top-0 left-0 text-gray-500 transition-all duration-500 ease-in-out ${username ? 'text-sm -translate-y-5' : 'hidden'}`} htmlFor="username">Username</label>
          </div>

          <div className="relative">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-cyan-500"
          />
          <label className={`absolute top-0 left-0 text-gray-500 transition-all duration-500 ease-in-out ${email ? 'text-sm -translate-y-4' : 'hidden'}`} htmlFor="email">Email</label>
          </div>         
          <div className="relative">
          <input 
            type="password" 
            name="password" 
            placeholder="Create Password" 
            required 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-cyan-500"
          />
          <label className={`absolute top-0 left-0 text-gray-500 transition-all duration-500 ease-in-out ${password ? 'text-sm -translate-y-4' : 'hidden'}`} htmlFor="password">Password</label>
          </div>
          <div className="relative">
          <input 
            type="password" 
            name="confirm-password" 
            placeholder="Confirm Password" 
            required 
            value={confirmPassword} 
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-cyan-500"
          />
          <label className={`absolute top-0 left-0 text-gray-500 transition-all duration-500 ease-in-out ${confirmPassword ? 'text-sm -translate-y-4' : 'hidden'}`} htmlFor="confirm-password">Confirm Password</label>  
          </div>
          <button 
            type="submit" 
            className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:scale-105 transition ease-in-out hover:shadow-md hover:shadow-cyan-300 text-white font-bold rounded-3xl"

          >
            Register
          </button>
        </form>
        <div className="mt-4">
            <hr className="my-4" />
          <a href="/login" className="text-cyan-500 hover:text-cyan-700 mb-0">Already signed up?  Log in</a>
        </div>
      </div>
    </div>
  );
}