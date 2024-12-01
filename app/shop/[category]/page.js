"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function ShopPage() {
  const router = useRouter();
  const { category } = useParams(); // Get the category from the URL
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    // Fetch all products from API
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
        applyFilters(response.data, category);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    // Apply filters whenever the category changes
    applyFilters(products, category);
  }, [category, products]);

  const applyFilters = (products, category) => {
    if (!products.length) return;
    const filtered =
      category === "all" || !category
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    setSortOrder(sortOrder);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    setFilteredProducts(sortedProducts);
  };

  const handleCategoryFilterChange = (e) => {
    const selectedCategory = e.target.value;
    router.push(`/shop/${selectedCategory}`); // Redirect to the selected category route
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Shop Products</h1>
        <nav className="flex gap-2 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-gray-400">&rsaquo;</span>
          <span>Shop</span>
          <span className="text-gray-400">&rsaquo;</span>
          <span>{category}</span>
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
            <select
              id="category"
              value={category || "all"} // Default to "all" if category is not provided
              onChange={handleCategoryFilterChange}
            >
              <option value="all">All</option>
              <option value="textbooks">Textbooks and Study Material</option>
              <option value="electronics">Electronics and Gadgets</option>
              <option value="furniture">Furniture and Room Essentials</option>
              <option value="clothing">Clothing and Accessories</option>
              <option value="sports">Sports Equipment</option>
              <option value="stationery">Stationery and Office Supplies</option>
              <option value="tickets">Tickets and Subscriptions</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img
                src={product.image}
                className="w-full h-48 object-cover"
                alt={product.name}
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
              <p className="text-gray-500">{product.category}</p>
              <p className="text-gray-500">{product.seller}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}