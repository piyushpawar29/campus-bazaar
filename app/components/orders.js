"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    axios
      .get("/api/orders") // Replace with your API endpoint
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  // Filtered Orders
  const filteredOrders = orders.filter(
    (order) =>
      order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const handleCancelOrder = (orderId) => {
    // Logic to cancel the order
    console.log(`Order ${orderId} cancelled.`);
  };

  const handleReturnOrder = (orderId) => {
    // Logic to return the order
    console.log(`Order ${orderId} returned.`);
  };

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search by Product or Order ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:w-1/2"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <p>Loading orders...</p>
      ) : (
        <div>
          {paginatedOrders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <div>
              {paginatedOrders.map((order) => (
                <div
                  key={order.orderId}
                  className="border border-gray-300 rounded-md p-4 mb-4 shadow-md flex flex-col md:flex-row"
                >
                  {/* Product Image */}
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <img
                      src={order.productImage}
                      alt={order.productName}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </div>

                  {/* Order Details */}
                  <div className="w-full md:w-3/4 pl-4">
                    <h2 className="text-xl font-bold">{order.productName}</h2>
                    <p className="text-gray-600">
                      Order ID: <span className="font-semibold">{order.orderId}</span>
                    </p>
                    <p className="text-gray-600">
                      Quantity: <span className="font-semibold">{order.quantity}</span>
                    </p>
                    <p className="text-gray-600">
                      Price: <span className="font-semibold">${order.price}</span>
                    </p>
                    <p className="text-gray-600">
                      Date: <span className="font-semibold">{order.date}</span>
                    </p>
                    <p className={`text-sm font-semibold mt-2 ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : order.status === "Cancelled"
                        ? "text-red-600"
                        : "text-blue-600"
                    }`}>
                      Status: {order.status}
                    </p>

                    {/* Actions */}
                    <div className="flex space-x-4 mt-4">
                      {order.status === "Pending" && (
                        <button
                          onClick={() => handleCancelOrder(order.orderId)}
                          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        >
                          Cancel Order
                        </button>
                      )}
                      {order.status === "Delivered" && (
                        <button
                          onClick={() => handleReturnOrder(order.orderId)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                          Return Order
                        </button>
                      )}
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 mx-1 border rounded-md ${
                  currentPage === index + 1
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}