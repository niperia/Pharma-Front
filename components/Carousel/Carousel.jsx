"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Carousel.scss";

const Carousel = () => {
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const [active, setActive] = useState(0);

  const lengthItems = itemsRef.current.length - 1;

  const reloadSlider = () => {
    if (sliderRef.current) {
      const currentItem = itemsRef.current[active];
      if (currentItem) {
        sliderRef.current.style.left = -currentItem.offsetLeft + "px";
      } else {
        console.error("Current item is undefined");
      }
    }

    const lastActiveDot = document.querySelector(".slider .dots li.active");
    if (lastActiveDot) {
      lastActiveDot.classList.remove("active");
    }
    if (dotsRef.current[active]) {
      dotsRef.current[active].classList.add("active");
    }
  };

  useEffect(() => {
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    const handleNextClick = () => {
      setActive((prevActive) =>
        prevActive + 1 <= lengthItems ? prevActive + 1 : 0
      );
    };

    const handlePrevClick = () => {
      setActive((prevActive) =>
        prevActive - 1 >= 0 ? prevActive - 1 : lengthItems
      );
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    const refreshInterval = setInterval(() => {
      handleNextClick();
    }, 3000);

    window.addEventListener("resize", reloadSlider);

    return () => {
      clearInterval(refreshInterval);
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
      window.removeEventListener("resize", reloadSlider);
    };
  }, [active, lengthItems]);

  useEffect(() => {
    reloadSlider();
  }, [active]);

  return (
    <div className="slider">
      <div className="list" ref={sliderRef}>
        {[
          "sac-gilbert.png",
          "mapara-b2.png",
          "banniere-mapara-1-1.png",
          "banniere-mapara-11.png",
        ].map((src, index) => (
          <div
            className="item"
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
          >
            <img
              className="slider-img"
              src={`/img/${src}`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev">←</button>
        <button id="next">→</button>
      </div>
      <ul className="dots">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className={index === 0 ? "active" : ""}
            ref={(el) => {
              if (el) dotsRef.current[index] = el;
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
