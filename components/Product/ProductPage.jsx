"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Assuming the route is something like /product/[id]
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:8080/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-white">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={`http://localhost:8080/${product.picture}`}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-700">
              Brand: {product.brand.name}
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-900">
              ${product.price}
            </p>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => router.back()}
          className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700"
        >
          <XMarkIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Back
        </button>
      </main>
    </div>
  );
}
