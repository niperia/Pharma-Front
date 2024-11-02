import React from "react";
import { useState } from "react";
function Adresse({ step, SetStep }) {
  const [adresse, SetAdresse] = useState();
  const [ville, SetVille] = useState();
  const [pays, SetPays] = useState();
  const [numero, SetNumero] = useState();
  function procceed() {
    const data = {
      ville: ville,
      pays: pays,
      adresse: adresse,
      tel: numero,
      userId: localStorage.getItem("userId"),
    };
    fetch("http://localhost:8080/api/adresse", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.text())
      .then((data) => {
        localStorage.setItem("adressId", data);

        SetStep(4);
      });
  }

  return (
    <div>
      <div class="max-w-4xl mx-auto mt-3 ">
        <div className="grid grid-cols-1 justify-between text-center mb-4">
          <button className="border-b-2 text-teal-500 border-b-teal-500">
            Adresses
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
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre Adresse"
                onChange={(e) => SetAdresse(e.target.value)}
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Ville</label>
              <input
                name="password"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre Ville"
                onChange={(e) => SetVille(e.target.value)}
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Numero de telephone
              </label>
              <input
                name="number"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre numero telephonique"
                onChange={(e) => SetNumero(e.target.value)}
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                choissisez une option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => SetPays(e.target.value)}
              >
                <option selected>--Selectionnez le pays--</option>
                <option value="Maroc">Maroc</option>
              </select>
            </div>
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={procceed}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adresse;
