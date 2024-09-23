"use client";
import Authentication from "@/components/Panier/Authentication";
import Categories from "@/components/Categories/Categories";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Adresse from "@/components/Panier/Adresse";
import Modelivraison from "@/components/Panier/Modelivraison";
import Paiement from "@/components/Panier/Paiement";

function Panier() {
  const [cart, Setcart] = useState();
  const [totalprice, Settotalprice] = useState();
  const [step, SetStep] = useState(1);

  useEffect(() => {
    const panier = localStorage.getItem("cart");
    let price = 0;
    JSON.parse(panier).map((product) => (price += product.price));
    Settotalprice(price);
    Setcart(JSON.parse(panier));
  });

  return (
    <div>
      <Navbar />
      <Categories />

      <section class="bg-white py-2 antialiased dark:bg-gray-900 md:py-5 page-container">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Panier
          </h2>

          <div class="mt-2 sm:mt-4 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {step == 1 && (
                <div class="space-y-6 ">
                  {cart?.map((product) => (
                    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" class="shrink-0 md:order-1">
                          <img
                            class=" h-20 w-20 dark:block"
                            src={`http://localhost:8080/api/images/${product.picture}`}
                            alt="imac image"
                          />
                        </a>

                        <div class="flex items-center justify-between md:order-3 md:justify-end">
                          <div class="text-end md:order-4 md:w-32">
                            <p class="text-base font-bold text-gray-900 dark:text-white">
                              {product.price} MAD
                            </p>
                          </div>
                        </div>

                        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {product.name}
                          </a>

                          <div class="flex items-center gap-4">
                            <button
                              type="button"
                              class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                class="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4">
                    <button
                      className="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={() => SetStep(2)}
                    >
                      Procced
                    </button>
                  </div>
                </div>
              )}

              {step == 2 && <Authentication step={step} SetStep={SetStep} />}
              {step == 3 && <Adresse step={step} SetStep={SetStep} />}
              {step == 4 && <Modelivraison step={step} SetStep={SetStep} />}
              {step == 5 && (
                <Paiement step={step} SetStep={SetStep} cart={cart} />
              )}
            </div>

            <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p class="text-xl font-semibold text-gray-900 dark:text-white">
                  Récapitulatif de la commande
                </p>

                <div class="space-y-4">
                  <div class="space-y-2">
                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Livraison
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        0 MAD
                      </dd>
                    </dl>

                    <dl class="flex items-center justify-between gap-4">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">
                        0.00
                      </dd>
                    </dl>
                  </div>

                  <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt class="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd class="text-base font-bold text-gray-900 dark:text-white">
                      {totalprice} MAD
                    </dd>
                  </dl>
                </div>

                <div class="flex items-center justify-center gap-2">
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      class="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form class="space-y-4">
                  <div>
                    <label
                      for="voucher"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Panier;
