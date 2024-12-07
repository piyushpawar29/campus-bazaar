"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Reset() {
  const router = useRouter();

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
      const response = await axios.post('/api/resetpassword', {
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
        if (response.data.message === 'Password reset successful') {
          router.push('/login');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        }
      }, 2000);
  
    } catch (error) {
      console.error(error);
      setMessage('Error resetting password');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-[url('/home-bg.svg')] bg-no-repeat bg-cover">
      <img src="logo.svg" className=" h-[130px] flex justify-center items-center " />
      <img src="name.png" className="h-[50px] flex justify-center items-center mb-3" />
      <div className="h-[400px] w-full max-w-md bg-white rounded-2xl shadow-lg p-7 text-center mt-0 m-5 ">
        <h3 className="text-2xl font-sans font-bold mb-5">Reset Password</h3>
        {message && <p className={`mb-4 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="password"
            name="password"
            placeholder="Enter Your New Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Your New Password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:border-teal-500"
          />
          <button 
            type="submit" 
            className="w-full px-3 py-2 mt-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 hover:from-white  hover:bg-white hover:text-cyan-500 hover:border hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500 text-white font-bold rounded-3xl"
          >
            Reset Password
          </button>
          <div className="mt-6">
            <hr className="my-4" />
            <a href="/" className="text-cyan-500 hover:text-cyan-700 mb-0">Back to Home</a>
          </div>
        </form>
      </div>
    </div>
  );
}
