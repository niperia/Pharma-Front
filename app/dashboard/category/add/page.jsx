"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
function page() {
  const router = useRouter();
  const [name, setName] = useState();
  const [slug, setSlug] = useState();

  function Addcategory() {
    const token = localStorage.getItem("token");
    const data = {
      name: name,
      slug: slug,
    };
    fetch("http://localhost:8080/admin/category", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("admin-token"),
      },
    });
  }
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
            Ajouter Category
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
              <label class="text-gray-800 text-sm mb-2 block">Slug</label>
              <input
                name="name"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder=""
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={Addcategory}
            >
              Ajouter category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
