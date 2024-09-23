import React from "react";

function Modelivraison({ step, SetStep }) {
  return (
    <div>
      <div class="max-w-4xl mx-auto mt-3 ">
        <div className="grid grid-cols-1 justify-between text-center mb-4">
          <button className="border-b-2 text-teal-500 border-b-teal-500">
            Mode de livraison
          </button>
        </div>
        <form>
          <div class="grid sm:grid-cols-1 gap-5 ">
            <div>
              <label class="text-gray-800 text-sm mb-5 block">
                Mode de livraison
              </label>
              <div className="flex flex-row gap-8 ">
                <div class="flex items-center">
                  <input
                    checked
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
                    Livraison PharmaPARA
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Si vous souhaitez ajouter un commentaire sur votre commande,
                veuillez l'écrire dans le champ ci-dessous
              </label>
              <input
                name="lname"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre nom"
              />
            </div>
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={() => SetStep(5)}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modelivraison;
