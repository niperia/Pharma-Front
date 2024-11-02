"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
function page() {
  const router = useRouter();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuatity] = useState();
  const [category, setCategory] = useState();
  const [picture, setPicture] = useState();
  const [description, setDiscription] = useState();
  const [tags, setTags] = useState();
  const [discountValue, setDiscountValue] = useState();

  function Addproduct() {
    const token = localStorage.getItem("token");
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("quantity", quantity);
    formdata.append("category", category);
    formdata.append("description", description);
    formdata.append("tags", tags);
    formdata.append("discountValue", discountValue);
    formdata.append("picture", picture);
    formdata.append("brand", brand);

    // const data = {
    //   name: name,
    //   marque: marque,
    //   price: price,
    //   quantity: quantity,
    //   category: category,
    //   picture: picture,
    //   description: description,
    //   tags: tags,
    //   discountValue: discountValue,
    // };
    fetch("http://localhost:8080/admin/product", {
      method: "post",
      body: formdata,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/categories", {
      method: "get",
    }).then((response) => response.json().then((data) => setCategories(data)));
  }, []);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/brands", {
      method: "get",
    }).then((response) => response.json().then((data) => setBrands(data)));
  }, []);

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard/category/add"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Category
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/product/add"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Products
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/brand/add"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Add Brand</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div class="max-w-4xl mx-auto mt-3 ">
        <div className="grid grid-cols-1 justify-between text-center mb-4">
          <button className="border-b-2 text-teal-500 border-b-teal-500">
            Ajouter Produit
          </button>
        </div>
        <form>
          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Nom</label>
              <input
                name="lname"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre nom"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Marque
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option selected>--Selectionnez la Marque--</option>
                {brands.map((brand) => {
                  return (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Prix</label>
              <input
                name="name"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner le Prix"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Quantity</label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner la Quantity"
                onChange={(e) => setQuatity(e.target.value)}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Picture</label>
              <input
                name="email"
                type="file"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre Picture"
                onChange={(e) => setPicture(e.target.files[0])}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Description
              </label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre Description"
                onChange={(e) => setDiscription(e.target.value)}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Discount Value
              </label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder=""
                onChange={(e) => setDiscountValue(e.target.value)}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Tags</label>
              <input
                name="password"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Tags"
                onChange={(e) => setTags(e.target.value)}
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                categorie
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected>--Selectionnez la categorie--</option>
                {categories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={Addproduct}
            >
              Ajouter Produit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
