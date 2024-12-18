"use client"
import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
  if (password !== confirmPassword) {
    setMessage('Passwords do not match');
    return;
  }
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
      setMessage('Loading...');
      const loadingInterval = setInterval(() => {
        setMessage((prev) => (prev === 'Loading...' ? 'Loading' : prev + '.'));
      }, 500);

      setTimeout(() => {
        clearInterval(loadingInterval);
        setMessage(response.data.message);
        if (response.data.message === 'Login successful') {
          router.push('/buyorsell');
          setEmail('');
          setPassword('');
        }
      }, 2000);
  
    } catch (error) {
      console.error(error);
      setMessage('Error logging in');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      
      <div className="h-[450px] w-full max-w-md bg-white rounded-2xl shadow-lg p-7 text-center mt-0 m-5 "> 
        <h3 className="text-2xl font-sans font-bold mb-5">Login to Your Account</h3>
        {message && <p className={`mb-4 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
          <label className={`absolute top-0 left-0 text-gray-500 transition-all duration-500 ease-in-out ${email ? 'text-sm -translate-y-5' : 'hidden'}`} htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300  rounded-3xl focus:outline-none focus:border-teal-500"
          />
          </div>

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
            className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:scale-105 transition ease-in-out hover:shadow-md hover:shadow-cyan-300 text-white font-bold rounded-3xl"
            >
            Login
          </button>
        </form>
        <div className="mt-6">
          <hr className="my-4" />
          <a href="/signup" className="text-cyan-500 hover:text-cyan-700 mb-0">Don't have an account?  Sign up</a>
        </div>
        <div className="mt-6">
          <a href="/forgot" className="text-cyan-500 hover:text-cyan-700 mb-0">Forgot Password</a>
        </div>
        <div className="mt-6">
          <hr className="my-4" />
          <a href="/" className="text-cyan-500 hover:text-cyan-700 mb-0">Back to Home</a>
        </div>
      </div>
    </div>
  );
}