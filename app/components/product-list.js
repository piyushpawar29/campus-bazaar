"use client";

import React from "react";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-32 object-cover"
          />
          <div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm font-bold">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
