"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const CATEGORY_NAMES = {
  all: "All Products",
  textbooks: "Textbooks and Study Material",
  electronics: "Electronics and Gadgets",
  furniture: "Furniture and Room Essentials",
  clothing: "Clothing and Accessories",
  sports: "Sports Equipment",
  stationery: "Stationery and Office Supplies",
  tickets: "Tickets and Subscriptions",
  miscellaneous: "Miscellaneous",
};

export default function ShopPage() {
  const router = useRouter();
  const { category } = useParams() || { category: "all" }; // Get the category from the URL
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
      category === "all"
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
  //Use a demo product if no products are available
  // const demoProduct = {
  //   id: 1,
  //   name: "Demo Product",
  //   price: 19.99,
  //   description: "This is a demo product.",
  //   category: "Demo Category",
  //   images: [
      
  //     "/calculator2.jpeg",
  //     "/calculator4.webp",
  //     "/calculator.jpg.avif"
  //   ],
  //   seller: "Demo Seller",
  // };
  // if (!filteredProducts.length) {
  //   setFilteredProducts([demoProduct]);
  // }
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Shop Products</h1>
        <nav className="flex gap-2 mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="text-gray-400">&rsaquo;</span>
          <Link href="/shop/all" className="hover:underline">
            Shop
          </Link>
          <span className="text-gray-400">&rsaquo;</span>
          <span>{CATEGORY_NAMES[category] || "Category"}</span>
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
              value={category}
              onChange={handleCategoryFilterChange}
            >
              {Object.entries(CATEGORY_NAMES).map(([key, name]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 border-gray-300 shadow-md shadow-gray-300 rounded-lg flex flex-col">
              <img
                src={product.image}
                className="w-full h-48 object-cover"
                alt={product.name}
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              {/* <p className="text-gray-700">{product.description}</p> */}
              <p className="text-lg font-semibold">${product.price}</p>
              <p className="text-gray-500">{CATEGORY_NAMES[product.category]}</p>
              <p className="text-gray-500 flex justify-items-end">Seller: {product.seller}</p>
              <button 
              onClick={() => router.push(`/product/${product.id}`)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}