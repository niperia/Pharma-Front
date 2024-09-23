import React from "react";
import { useRouter } from "next/navigation";

function Paiement({ step, SetStep, cart }) {
  const router = useRouter();
  function createOrder() {
    cart.map(async (product) => {
      const data = {
        addressId: parseInt(localStorage.getItem("adressId")),
        productId: product.id,

        userId: parseInt(localStorage.getItem("userId")),
      };
      await fetch("http://localhost:8080/orders/create", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
    location.href = "/panier/success";
  }
  return (
    <div>
      <div class="max-w-4xl mx-auto mt-3 ">
        <div className="grid grid-cols-1 justify-between text-center mb-4">
          <button className="border-b-2 text-teal-500 border-b-teal-500">
            Paiment
          </button>
          <p className="mt-4">
            L'adresse sélectionnée sera utilisée à la fois comme adresse
            personnelle (pour la facture) et comme adresse de livraison.
          </p>
        </div>
        <form>
          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Adresse</label>
              <div>
                <p>
                  here all the information abt the adresse and paiment details{" "}
                </p>
              </div>
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Mode de paiement
              </label>
              <div class="flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Payer comptant à la livraison
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  CMI, Payer en toute sécurité avec votre carte bancaire. CMI,
                  Payer en toute sécurité avec votre carte bancaire.
                </label>
              </div>
            </div>
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={createOrder}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paiement;
