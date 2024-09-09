"use client";
import products from "@/data/products.json";
import { useState } from "react";
import Categories from "@/components/Categories/Categories";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  // {
  //   id: "color",
  //   name: "Color",
  //   options: [
  //     { value: "white", label: "White", checked: false },
  //     { value: "beige", label: "Beige", checked: false },
  //     { value: "blue", label: "Blue", checked: true },
  //     { value: "brown", label: "Brown", checked: false },
  //     { value: "green", label: "Green", checked: false },
  //     { value: "purple", label: "Purple", checked: false },
  //   ],
  // },
  {
    id: "Marque",
    name: "Marque",
    options: [
      { value: "LA ROCHE-POSAY", label: "LA ROCHE-POSAY", checked: false },
      { value: "NUXE", label: "NUXE", checked: false },
      { value: "VICHY", label: "VICHY", checked: false },
      { value: "DUCRAY", label: "DUCRAY", checked: false },
      { value: "BEURER", label: "BEURER", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ params }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [Produits, setProduits] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);
  useEffect(() => {
    if (!shouldFetch) return;
    let url = `http://localhost:8080/products?category=${params.slug}`;
    if (brand) {
      url += `&brand=${brand}`;
    }
    if (price) {
      url += `&maxPrice=${price}`;
    }
    fetch(url, {
      method: "get",
    }).then((response) => response.json().then((data) => setProduits(data)));

    setShouldFetch(false);
  }, [shouldFetch, brand, price]);
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/brands", {
      method: "get",
    }).then((response) => response.json().then((data) => setBrands(data)));
  }, []);
  return (
    <div className="bg-white">
      <Navbar />
      <Categories />
      <div>
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {/* <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul> */}

                <Disclosure
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">Marque</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center">
                          <input
                            defaultValue={brand.id}
                            id={brand.id}
                            name={brand.name}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label className="ml-3 min-w-0 flex-1 text-gray-500">
                            {brand.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-2 pt-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Les Produits
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                <Disclosure as="div" className="border-b border-gray-200 py-1">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">Marque</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-1">
                    <div>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setBrand(e.target.value)}
                      >
                        <option selected value={""}>
                          --Selectionnez la Marque--
                        </option>
                        {brands.map((brand) => {
                          return (
                            <option key={brand.id} value={brand.id}>
                              {brand.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <Slider onChange={(newPrice) => setPrice(newPrice)} />
                <button
                  type="button"
                  onClick={() => setShouldFetch(true)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Search
                </button>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="flex justify-center p-4">
                  <div className="w-full max-w-screen-xl">
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                      {Produits.map((product) => (
                        <div key={product.id} className="productCard">
                          <Link href={`/${product.name}`}>
                            <div className="card flex flex-col justify-center p-3 items-center text-center bg-white rounded-lg shadow-2xl">
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
                                <p className="uppercase text-sm text-gray-400">
                                  {product.marque}
                                </p>
                              </div>
                              <div className="prod-info grid gap-4">
                                <div className="flex flex-col  justify-between items-center text-gray-900">
                                  <p className="font-bold text-xl px-2">
                                    {product.price} DH
                                  </p>
                                  <button className="px-6 py-2 mt-2 md:mt-0 transition ease-in duration-200 uppercase rounded-full hover:bg-sky-400 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}