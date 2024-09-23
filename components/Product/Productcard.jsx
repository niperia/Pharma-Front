import React from "react";
import Link from "next/link";
function ProductCard({ product }) {
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
  }

  return (
    <div key={product.id} className="productCard">
      <div className="card flex flex-col justify-center p-3 items-center text-center bg-white rounded-lg shadow-2xl">
        <Link href={`/product/${product.id}`}>
          <div className=" w-40 min-h-40 flex text-center  justify-center">
            <img
              src={`http://localhost:8080/api/images/${product.picture}`}
              className="object-contain object-center"
              alt={product.title}
            />
          </div>
          <div className="prod-title mb-4 ">
            <p className="text-xl uppercase text-gray-900 font-bold">
              {product.name}
            </p>
            <p className="uppercase text-sm text-gray-400">{product.marque}</p>
          </div>
        </Link>
        <div className="prod-info grid gap-4">
          <div className="flex flex-col  justify-between items-center text-gray-900">
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
    </div>
  );
}

export default ProductCard;
