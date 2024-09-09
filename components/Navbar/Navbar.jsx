import React from "react";
import "@/components/Navbar/Navbar.scss";
export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <a href="/">PharmaPARA</a>
      </div>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="entrer le produit a rechercher"
        ></input>
      </div>
      <div className="panier">
        <a href="/panier">
          {" "}
          <div className="style-icon">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5928 13.9994H22.9827L19.669 5.43095C19.3731 4.66356 18.5477 4.29495 17.837 4.61614C17.1203 4.93516 16.7821 5.8168 17.078 6.58418L19.9468 13.9994H12.0492L14.9179 6.58418C15.2139 5.8168 14.8756 4.93516 14.159 4.61614C13.4463 4.29495 12.6229 4.66356 12.327 5.43095L9.0113 13.9994H4.40317C3.62609 13.9994 3 14.6676 3 15.4997C3 16.3296 3.62609 17 4.40317 17H4.88633L6.31367 25.3744C6.62168 27.1808 8.08928 28.5 9.80248 28.5H22.1975C23.9107 28.5 25.3783 27.1808 25.6863 25.3744L27.1137 17H27.5968C28.3719 17 29 16.3296 29 15.4997C28.996 14.6676 28.3679 13.9994 27.5928 13.9994ZM12.2646 24.5682C12.2646 24.9217 12.0069 25.2084 11.6908 25.2084H10.5413C10.2232 25.2084 9.96756 24.9217 9.96756 24.5682V18.2912C9.96756 17.9376 10.2252 17.6509 10.5413 17.6509H11.6908C12.0089 17.6509 12.2646 17.9376 12.2646 18.2912V24.5682ZM17.2049 24.5682C17.2049 24.9217 16.9472 25.2084 16.6311 25.2084H15.4816C15.1635 25.2084 14.9079 24.9217 14.9079 24.5682V18.2912C14.9079 17.9376 15.1655 17.6509 15.4816 17.6509H16.6311C16.9492 17.6509 17.2049 17.9376 17.2049 18.2912V24.5682ZM22.0304 24.5682C22.0304 24.9217 21.7727 25.2084 21.4567 25.2084H20.3072C19.9891 25.2084 19.7334 24.9217 19.7334 24.5682V18.2912C19.7334 17.9376 19.9911 17.6509 20.3072 17.6509H21.4567C21.7748 17.6509 22.0304 17.9376 22.0304 18.2912V24.5682Z"
                fill="#1A1A1A"
              ></path>
            </svg>
          </div>
          <div>Panier</div>
        </a>
      </div>
      <div className="connexion">
        <div className="style-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 448 512"
            style={{ padding: "3px" }}
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
        </div>
        <div>Connexion</div>
      </div>
    </nav>
  );
}