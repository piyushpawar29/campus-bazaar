"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'piyush',
    email: 'piyush@piyush',
    phone: '1234567890',
    address: '123 Main St',
    city: 'City',
    state: 'State',
    pincode: '12345',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user info from API on component mount
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('/api/userinfo');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/updateuserinfo', userInfo);
      console.log('User info updated:', response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  return (
    <div className="profile-container m-5 p-3 mt-6 bg-gray-100 border border-gray-300 rounded">
      {!isEditing ? (
        <div className="p-5 pt-2  text-lg">
          <h2 className="text-2xl font-bold mb-2">EDIT PROFILE</h2>
          <hr className="border-t border-gray-400" /><br/>
          <h2 className="text-xl font-bold mb-2">BASIC INFO</h2>
          <p>Name: {userInfo.name}</p>
          <br/><hr className="border-t border-gray-400" />
          <br/><h2 className="text-xl font-bold mb-2">CONTACT INFO</h2>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <br/><hr className="border-t border-gray-400" />
          <br/><h2 className="text-xl font-bold mb-2">ADDITIONAL INFO</h2>
          <p>Address: {userInfo.address || 'Not Provided'}</p>
          <p>City: {userInfo.city || 'Not Provided'}</p>
          <p>State: {userInfo.state || 'Not Provided'}</p>
          <p>Pincode: {userInfo.pincode || 'Not Provided'}</p>
          <button onClick={() => setIsEditing(true)} 
          className="p-2 w-1/4 mt-3 bg-green-700 text-white hover:bg-green-800 hover:text-white rounded-xl">Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-3 text-lg  rounded">
          <div className="">
          <h2 className="text-2xl font-bold mb-2">EDIT PROFILE</h2>
          <hr className="border-t border-gray-400" /><br/>
          <h2 className="text-xl font-bold mb-2">BASIC INFO</h2>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <br/><hr className="border-t border-gray-400" />
          <h2 className="text-xl font-bold mb-2 mt-2">CONTACT INFO</h2>
          <div className="mb-2">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="">
            
            <label className="block text-gray-700">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
          <br/><hr className="border-t border-gray-400" />
          <br/><h2 className="text-xl font-bold mb-2">ADDITIONAL INFO</h2>
            <label className="block text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={userInfo.city}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-gray-700">State:</label>
            <input
              type="text"
              name="state"
              value={userInfo.state}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <label className="block text-gray-700">Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={userInfo.pincode}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">Save Changes</button>
          <button onClick={() => setIsEditing(false)} className="px-4 py-2 ml-2 bg-red-600 text-white rounded-md hover:bg-red-700">Cancel</button>

        </form>
      )}
    </div>
  );
};

export default EditProfile;
