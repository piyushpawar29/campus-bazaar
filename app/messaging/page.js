"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MessagingPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sellerId, setSellerId] = useState(null);
  const [productId, setProductId] = useState(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sellerIdParam = urlParams.get("sellerId");
    const productIdParam = urlParams.get("productId");
    if (sellerIdParam && productIdParam) {
      setSellerId(sellerIdParam);
      setProductId(productIdParam);
    }
  }, []);
  useEffect(() => {
    if (sellerId && productId) {
      axios
        .get(`/api/messages?sellerId=${sellerId}&productId=${productId}`)
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error("Error fetching messages:", error);
        });
    }
  }, [sellerId, productId]);
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage) {
      try {
        const response = await axios.post("/api/messages", {
          sellerId,
          productId,
          message: newMessage,
        });
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Messaging</h1>
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg">{message.message}</p>
          <p className="text-sm text-gray-500">
            {message.senderId === sellerId ? "Seller" : "You"} -{" "}
            {new Date(message.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
      <form onSubmit={handleSendMessage} className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Type a message..."/>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">
          Send
        </button>
      </form>
    </div>
  );
}
