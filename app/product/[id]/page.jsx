"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Categories from "@/components/Categories/Categories";
import Navbar from "@/components/Navbar/Navbar";

export default function ProductPage({ params }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id; // Get 'id' from router.query

    if (!id) return; // Ensure id exists

    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8080/products/${id}`);
      if (!response.ok) {
        // Handle error (optional)
        setLoading(false);
        return;
      }
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [router.query]); // Trigger useEffect when router.query changes

  if (loading) return <div className="text-center">Loading...</div>;
  if (!product) return <div className="text-center">Product not found</div>;

  return (
    <div>
      <Navbar />
      <Categories />
      <div className="bg-gray-100">
        <nav className="bg-white shadow-md p-4"></nav>

        <main className="max-w-7xl mx-auto p-6">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img
                src={`http://localhost:8080/api/images/${product.picture}`}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h1 className="text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Brand:{" "}
                <span className="font-semibold">{product.brand.name}</span>
              </p>
              <p className="mt-4 text-2xl font-bold text-gray-800">
                {product.price} MAD
              </p>
              <p className="mt-4 text-gray-700">{product.description}</p>
              <div className="mt-6">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition"
            onClick={() => router.back()}
          >
            <XMarkIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Back
          </button>
        </main>
      </div>
    </div>
  );
}
