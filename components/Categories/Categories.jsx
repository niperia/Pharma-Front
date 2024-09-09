"use client";
import React from "react";
import "@/components/Categories/Categories.scss";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/categories", {
      method: "get",
    }).then((response) => response.json().then((data) => setCategories(data)));
  }, []);
  return (
    <div>
      <div className="nav-categories">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/produits/${category.slug}`}
            className="category-link"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
