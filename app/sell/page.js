"use client";
import axios from "axios";
import { useState } from "react";
import React from "react";
import {IoIosImage} from "react-icons/io";
export default function SellPage() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [image, setImage] = useState(null);

  
  const userInfo = {
    id: 1,
    name: "Test User",
    email: "testuser@example.com",
    phoneNumber: "1234567890",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("additionalDetails", additionalDetails);
    if (image) {
      formData.append("image", image);
    }
    try {
      const response = await axios.post("/api/sell", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };
  const [images, setImages] = useState(Array(6).fill(null)); // State to store images

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="flex bg-amber-100"><button className="bg-white hover:bg-gray-300 font-bold py-2 px-4 m-3 rounded float-left" onClick={() => window.history.back()}>
      Go Back</button></div>
        <div className="flex justify-center items-center flex-col bg-amber-100">
            <h1 className="flex justify-center items-center m-5 mt-0 text-3xl font-bold">POST YOUR ITEM</h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-10 rounded-lg border border-black m-5 w-3/4">
            <h2 className="text-2xl font-bold mt-4 mb-3">CATEGORY:</h2>
            <label className="text-lg flex flex-col font-semibold">
                
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-black p-2 rounded font-normal">
                <option value="">Select Category</option>
                <option value="Textbooks and Study Material">Textbooks and Study Material </option>
                <option value="Electronics and Gadgets">Electronics and Gadgets</option>
                <option value="Furniture and Room Essentials">Furniture and Room Essentials </option>
                <option value="Clothing and Accessories">Clothing and Accessories </option>
                <option value="Sports Equipment">Sports Equipment </option>
                <option value="Stationery and Office Supplies">Stationery and Office Supplies </option>
                <option value="Tickets and Subscriptions">Tickets and Subscriptions </option>
                <option value="Miscellaneous">Miscellaneous</option>
                </select>
                
            </label>
            <br /><hr></hr><br/>
            <h2 className="text-2xl font-bold">INCLUDE SOME DETAILS</h2>
            <label className="text-lg flex flex-col mt-3">
                Title:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                className=" p-2 border border-black rounded w-2/3 text-black" />
            </label>
            <br />
            <label className="text-lg flex flex-col">
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                className=" p-2 border border-black rounded w-2/3 text-black"/>
            </label>
            <br /><hr></hr><br/>
            <h2 className="text-2xl font-bold">SET A PRICE</h2>
            <label className="text-lg flex flex-col">
                Price:
                ₹<input type="text" value={price} onChange={(e) => setPrice(e.target.value)} 
                className=" p-2 border border-black rounded w-2/3 text-black"/>
            </label>
            <br /><hr></hr><br/>
            <h2 className="text-2xl font-bold">SET A LOCATION</h2>
            <label className="text-lg flex flex-col">
                Location:
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                className=" p-2 border border-black rounded w-2/3 text-black" />
            </label>
            <br /><hr></hr><br/>
            <label className="text-lg flex flex-col">
                Additional Details:
                <textarea
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                className=" p-2 border border-black rounded w-2/3 text-black"
                />
            </label>
            <br /><hr></hr><br/>
          


            <div>
              <h2 className="text-2xl font-bold">UPLOAD AN IMAGE</h2>
              <label className="text-lg flex flex-col">
                Image:
                <div className="border border-black p-4 rounded-md flex justify-center items-center w-full sm:w-2/3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="border-2 border-dotted border-gray-300 rounded-md p-2 flex flex-col items-center justify-center"
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-40 h-40 object-cover rounded-md"
                          />
                        ) : (
                          <IoIosImage
                            size="90"
                            className="text-gray-500 cursor-pointer"
                            onClick={() =>
                              document.getElementById(`file-input-${index}`).click()
                            }
                          />
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          className="hidden"
                          id={`file-input-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </label>
            </div>
            <br /><hr></hr><br/>
            <h2 className="text-2xl font-bold">CONFIRM YOUR INFO</h2>
            <p className="text-lg">Please confirm that the following information is correct:</p>
            <ul className="text-lg list-inside">
                <li>Name: {userInfo.name}</li>
                <li>Email: {userInfo.email}</li>
                <li>Phone Number: {userInfo.phoneNumber}</li>
            </ul>
            <br /><hr></hr><br/>
            
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded text-center w-1/4" type="submit">POST</button>
            </form>
        </div>

    </>
  );
}
