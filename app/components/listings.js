"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Listings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 5;

  useEffect(() => {
    axios
      .get("/api/listings")
      .then((response) => {
        setListings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
        setLoading(false);
      });
  }, []);

  // Filtered Listings
  const filteredListings = listings.filter(
    (listing) =>
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * listingsPerPage,
    currentPage * listingsPerPage
  );

  const totalPages = Math.ceil(filteredListings.length / listingsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Listings</h1>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Search by Name or Description"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mb-4 md:mb-0 md:w-1/2"
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      {loading ? (
        <p>Loading listings...</p>
      ) : (
        <div>
          {paginatedListings.length === 0 ? (
            <p>No listings found.</p>
          ) : (
            <div>
              {paginatedListings.map((listing) => (
                <div
                  key={listing.id}
                  className="border border-gray-300 rounded-md p-4 mb-4 shadow-md flex flex-col md:flex-row"
                >
                  {/* Images */}
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <div className="flex flex-wrap">
                      {listing.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={listing.name}
                          className="w-20 h-20 object-cover mr-2 mb-2 rounded-md"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Listing Details */}
                  <div className="w-full md:w-3/4 pl-4">
                    <h2 className="text-xl font-bold">{listing.name}</h2>
                    <p className="text-gray-600">{listing.description}</p>
                    <p className="text-gray-600">
                      Price: <span className="font-semibold">${listing.price}</span>
                    </p>
                    <p className="text-gray-600">
                      Location: <span className="font-semibold">{listing.location}</span>
                    </p>

                    {/* Actions */}
                    <div className="flex space-x-4 mt-4">
                      <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900">
                        Edit Listing
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                        Delete Listing
                      </button>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
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