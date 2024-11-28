"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layout";
import Link from "next/link";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    // Fetch products from API
    axios.get("/api/products")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    setSortOrder(sortOrder);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(sortedProducts);
  };

  const handleCategoryFilterChange = (e) => {
    const category = e.target.value;
    setCategoryFilter(category);

    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Shop Products</h1>
        <nav className="flex gap-2 mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400">&rsaquo;</span>
          <span>Shop</span>
        </nav>
        <div className="flex justify-between mb-4">
          <div>
            <label htmlFor="sort">Sort by price: </label>
            <select id="sort" value={sortOrder} onChange={handleSortChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div>
            <label htmlFor="category">Filter by category: </label>
            <select id="category" value={categoryFilter} onChange={handleCategoryFilterChange}>
              <option value="all">All</option>
              <option value="textbooks">Textbooks and Study Material </option>
              <option value="electronics">Electronics and Gadgets </option>
              <option value="furniture">Furniture and Room Essentials </option>
              <option value="clothing">Clothing and Accessories </option>
              <option value="sports">Sports Equipment </option>
              <option value="stationery">Stationery and Office Supplies </option>
              <option value="tickets">Tickets and Subscriptions </option>
              <option value="miscellaneous">Miscellaneous </option> 
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} className="w-full h-48 object-cover" alt={product.name} />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
              <p className="text-gray-500">{product.category}</p>
              {/* Add more product details as needed */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
