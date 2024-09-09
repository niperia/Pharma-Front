import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import "@/app/homepage.scss";
import Categories from "@/components/Categories/Categories";
import Productcarousel from "@/components/ProductCarousel/Productcarousel";
export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <Categories />
      <Carousel />

      <div className="flex my-6 mx-6 gap-20 justify-center">
        <div class="w-1/3 p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-sky-300   ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              Vous allez adorer :)
            </h5>
          </a>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
            LES PROMOS PHARMAPARA
          </p>
          <a
            href="#"
            class="flex items-center px-3 py-2 text-sm font-medium text-center text-blue-400 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center mt-6 "
          >
            Je decouvre
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <div class="w-1/3 p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-sky-300 ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              Vous aimez...
            </h5>
          </a>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
            LES PLUS VENDUS
          </p>
          <a
            href="#"
            class="flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center mt-6 "
          >
            Je decouvre
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        <div class=" w-1/3 p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-sky-300 ">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              On se met au vert
            </h5>
          </a>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
            DECOUVREZ NOS GAMMES BIO
          </p>
          <a
            href="#"
            class="flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center mt-6 "
          >
            Je decouvre
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-evenly p-4 gap-44 bg-emerald-100 mb-4">
        <div className="flex flex-col gap-2 text-center items-center justify-center">
          <div class="w-20 min-h-20 flex text-center items-center justify-center ">
            <img
              class="object-contain"
              width="90px"
              src="/img/livrais.png"
            ></img>
          </div>

          <h3>LIVRAISON</h3>
          <p className="text-xs	">AVEC LES MEILLEUR SERVICES LIVRAISON</p>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <div class="w-20 min-h-20  ">
            <img
              class="object-contain"
              width="90px"
              src="/img/echantillion.png"
            ></img>
          </div>

          <h3>GRATUITE OFFERTE</h3>
          <p className="text-xs	">DES L'ACHAT D'UN PRODUIT DE +200DH</p>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <div class="w-20 min-h-20">
            <img
              class="object-contain"
              width="90px"
              src="/img/fiabilite.png"
            ></img>
          </div>
          <h3>FIABILITE</h3>
          <p className="text-xs	">TOUS LES PRODUITS SONT ORIGINALES</p>
        </div>
        <div className="flex flex-col gap-2 text-center items-center">
          <div class="w-20 min-h-20">
            <img class="object-contain" width="90px" src="/img/promo.png"></img>
          </div>

          <h3>PROMOTION OFFERTE</h3>
          <p className="text-xs	">AVEC LES CODES PROMO DE PARAPHARMA</p>
        </div>
      </div>
      <Productcarousel />

      {/* <div className="point-location">notre Localisation</div> */}
      {/* <div className="more-info">
        <div className="about">
          <h1>A propos</h1>
          <p>
            nous somme une parapharmacie qui se focalise sur la vente des
            produits cosmetiques
          </p>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
