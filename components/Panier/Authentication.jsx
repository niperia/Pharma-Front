"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
function Authentication({ step, SetStep }) {
  const router = useRouter();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfpassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [tab, setTab] = useState(1);

  function tabcheck() {
    if (tab == 1) {
      login();
    } else {
      register();
    }
  }
  function login() {
    const data = {
      username: username,
      password: password,
    };
    fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("userId", data.userId);
          localStorage.setItem("token", data.token);
          SetStep(3);
        }
        console.log(data);
      });
  }
  function register() {
    if (password !== confpassword) {
      alert("nigga phone telephone");
      return;
    }

    const data = {
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
    };
    fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("userId", data.userId);
          SetStep(3);
        }
        console.log(data);
      });
  }
  return (
    <div>
      <div class="max-w-4xl mx-auto mt-3">
        <div className="grid grid-cols-2 justify-between text-center mb-4">
          <button
            className={
              "border-b-2 " +
              (tab == 1 ? "text-teal-500 border-b-teal-500" : "")
            }
            onClick={(e) => setTab(1)}
          >
            Log in
          </button>
          <button
            className={
              "border-b-2 " +
              (tab == 2 ? "text-teal-500 border-b-teal-500" : "")
            }
            onClick={(e) => setTab(2)}
          >
            Commander en tant qu'invite
          </button>
        </div>
        <form>
          <div class="grid sm:grid-cols-2 gap-8">
            {tab == 2 && (
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Nom</label>
                <input
                  name="lname"
                  type="text"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Donner votre nom"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            )}
            {tab == 2 && (
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Prenom</label>
                <input
                  name="name"
                  type="text"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Donner votre prenom"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            )}
            {tab == 2 && (
              <div>
                <label class="text-gray-800 text-sm mb-2 block">je suis:</label>
                <div className="flex flex-row gap-8 ">
                  <div class="flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Mme.
                    </label>
                  </div>
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
                      M.
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Mot de passe
              </label>
              <input
                name="password"
                type="password"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Donner votre mot de passe"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {tab == 2 && (
              <div>
                <label class="text-gray-800 text-sm mb-2 block">
                  Confirmation Mot de passe
                </label>
                <input
                  name="cpassword"
                  type="password"
                  class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                  placeholder="Entrer la confirmation du mot de passe"
                  onChange={(e) => setConfpassword(e.target.value)}
                />
              </div>
            )}
          </div>

          <div class="!mt-6">
            <button
              type="button"
              class="flex w-full items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={tabcheck}
            >
              Continuer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authentication;
