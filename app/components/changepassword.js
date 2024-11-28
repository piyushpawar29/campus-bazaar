"use client";
import React, { useState } from "react";
import axios from "axios";


export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/changepassword', {
        oldPassword,
        newPassword,
        confirmPassword
      });

      setMessage(response.data.message);
      if (response.data.message === 'Password changed successfully') {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error changing password');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gradient-to-r from-amber-100 via-amber-200 to-amber-300">
      <div className="h-[500px] w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center mt-0 mb-7">
        <h3 className="text-2xl font-sans font-bold mb-5">Change Password</h3>
        {message && <p className={`mb-4 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Current Password"
            className="w-full p-4 text-sm bg-gray-50 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="w-full p-4 text-sm bg-gray-50 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="w-full p-4 text-sm bg-gray-50 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full p-4 text-sm font-bold text-white bg-green-600 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-lg transition duration-300 hover:scale-105 hover:bg-blue-700">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
