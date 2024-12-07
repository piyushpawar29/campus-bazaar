"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoIosImage } from "react-icons/io";
export default function SellPage() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState(Array(6).fill(null));
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Fetch user information
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("/api/userinfo");
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("additionalDetails", additionalDetails);
    formData.append("quantity", quantity);
    images.forEach((image, index) => {
      if (image) formData.append(`image_${index}`, image);
    });

    try {
      const response = await axios.post("/api/sell", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle image upload
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

  // Handle image removal
  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages[index] = null;
    setImages(updatedImages);
  };

  // Save edited user info
  const handleSave = () => {
    if (userInfo) {
      console.log("Saved user info:", userInfo); // Replace with API call if needed
    }
  };

  return (
    <>
      <div className="flex bg-cyan-100">
        <button
          className="bg-white hover:bg-gray-300 font-bold py-2 px-4 m-3 rounded"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
      <div className="flex justify-center items-center flex-col bg-cyan-100">
        <h1 className="m-5 mt-0 text-3xl font-bold">POST YOUR ITEM</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white p-10 rounded-lg border border-black m-5 w-3/4"
        >
          <section>
            <h2 className="text-2xl font-bold mb-3">CATEGORY:</h2>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-black p-3 rounded font-normal w-2/3"
            >
              <option value="">Select Category</option>
              <option value="Textbooks and Study Material">
                Textbooks and Study Material
              </option>
              <option value="Electronics and Gadgets">Electronics and Gadgets</option>
              <option value="Furniture and Room Essentials">
                Furniture and Room Essentials
              </option>
              <option value="Clothing and Accessories">
                Clothing and Accessories
              </option>
              <option value="Sports Equipment">Sports Equipment</option>
              <option value="Stationery and Office Supplies">
                Stationery and Office Supplies
              </option>
              <option value="Tickets and Subscriptions">
                Tickets and Subscriptions
              </option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>
          </section>

          <hr className="my-4" />
          <section className="flex flex-col">
            <h2 className="text-2xl font-bold">INCLUDE SOME DETAILS</h2>
            <label className="mt-3">
              Title:<br/>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-black rounded w-2/3"
              />
            </label>
            <label className="mt-3">
              Description:<br/>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border border-black rounded w-2/3"
              />
            </label>
          </section>

          <hr className="my-4" />

          <section>
            <h2 className="text-2xl font-bold">SET A PRICE</h2>
            <label className="mt-3">
              Price:<br/> ₹
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="p-2 border border-black rounded w-2/3"
              />
            </label>
          </section>

          <hr className="my-4" />

          <section>
            <h2 className="text-2xl font-bold">SET A QUANTITY</h2>
            <label className="mt-3">
              Quantity:<br/>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="p-2 border border-black rounded w-2/3"
              />
            </label>
          </section>

          <hr className="my-4" />

          <section>
            <h2 className="text-2xl font-bold">UPLOAD IMAGES</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-dotted border border-gray-300 w-full sm:w-2/3 h-full items-center p-4 rounded-md">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center rounded-md p-2 border-2 border-dotted border-gray-300">
                  {image ? (
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-40 h-40 object-cover"
                    />
                  ) : (
                    <IoIosImage
                      size="60"
                      className="text-gray-500"
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
                  {image && (
                    <button
                      type="button"
                      className="mt-2 text-red-500"
                      onClick={() => handleRemoveImage(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          <hr className="my-4" />

          <section>
            <h2 className="text-2xl font-bold">CONFIRM YOUR INFO</h2>
            {!isEditing ? (
              <>
                <div className="mt-3">
                  Please confirm your information:
                  <ul className="list-inside">
                    <li>Name: {userInfo?.name}</li>
                    <li>Email: {userInfo?.email}</li>
                    <li>Phone: {userInfo?.phoneNumber}</li>
                  </ul>
                </div>  
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="mt-3 bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-700 transition duration-300 ease-in-out hover:scale-105"
                >
                  Edit Info
                </button>
              </>
            ) : (
              <section>
                <label>Name
                <input
                  type="text"
                  value={userInfo?.name || ""}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  className="p-2 border border-black rounded w-2/3 mt-2"
                />
              </label><br/>

              <label className="mt-3">
                Email:
                <input
                  type="email"
                  value={userInfo?.email || ""}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className="p-2 border border-black rounded w-2/3 mt-2"
                />
              </label><br/>
              <label className="mt-3">
                Phone:
                <input
                  type="text"
                  value={userInfo?.phoneNumber || ""}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phoneNumber: e.target.value })
                  }
                  className="p-2 border border-black rounded w-2/3 mt-2"
                />
              </label><br/>
              <button
                type="button"
                onClick={handleSave}
                className="mt-3 bg-green-600 px-4 py-2 rounded text-white"
              >
                Save Info
              </button>
            </section>
          )}
        </section>
        <button
          type="submit"
          className="mt-5 bg-green-600 w-2/3 px-6 py-3 rounded-lg text-white font-bold hover:bg-green-700 transition duration-300 ease-in-out hover:scale-105"
        >
          POST
        </button>
      </form>
    </div>
  </>
  );
}