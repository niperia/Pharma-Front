import React from "react";
import Link from "next/link";

const PurchaseSuccess = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Purchase Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been successfully placed.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
