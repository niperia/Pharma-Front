import React, { useState } from "react";
import Link from "next/link";

function ProductCard({ product }) {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  function addtocart() {
    console.log(product);
    let arr = [];
    var cart = localStorage.getItem("cart");
    if (cart) {
      arr = JSON.parse(cart);
      arr.push(product);
    } else {
      arr.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(arr));

    // Show popup
    setShowPopup(true);

    // Automatically hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  return (
    <div key={product.id} className="productCard">
      <div className="card flex flex-col justify-between p-3 items-center text-center bg-white rounded-lg shadow-2xl h-full">
        <Link href={`/product/${product.id}`}>
          <div className="w-full h-60 flex text-center justify-center overflow-hidden">
            <img
              src={`http://localhost:8080/images/${product.picture}`}
              className="object-cover object-center w-full h-full"
              alt={product.title}
            />
          </div>
          <div className="prod-title mb-4">
            <p className="text-xl uppercase text-gray-900 font-bold">
              {product.name}
            </p>
            <p className="uppercase text-sm text-gray-400">{product.marque}</p>
          </div>
        </Link>
        <div className="prod-info grid gap-4">
          <div className="flex flex-col justify-between items-center text-gray-900">
            <p className="font-bold text-xl px-2">{product.price} DH</p>

            <button
              onClick={addtocart}
              className="px-6 py-2 mt-2 md:mt-0 transition ease-in duration-200 uppercase rounded-full hover:bg-sky-400 hover:text-white border-2 border-gray-900 focus:outline-none"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-2">Product Added to Cart!</h2>
            <p>{product.name} has been added to your cart.</p>
            <button
              className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg"
              onClick={() => setShowPopup(false)} // Close the popup manually
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
