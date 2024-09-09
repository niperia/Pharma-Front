"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Productcarousel.scss";

const Carousel = () => {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const dotRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      src: "creme.jpg",
      title: "Sac Gilbert",
      description: "Stylish and durable.",
    },
    {
      src: "creme.jpg",
      title: "Mapara B2",
      description: "Comfortable and sleek.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 1",
      description: "Elegant and modern.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 11",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 12",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 13",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 14",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 15",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 16",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 17",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 18",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 19",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 20",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 20",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 20",
      description: "Versatile and chic.",
    },
    {
      src: "creme.jpg",
      title: "Banniere Mapara 20",
      description: "Versatile and chic.",
    },
  ];

  const totalItems = items.length;
  const visibleItemsCount = 5;

  const updateCarouselPosition = () => {
    if (carouselRef.current) {
      const itemWidth = itemRefs.current[0]?.offsetWidth || 0;
      const offset = currentIndex * itemWidth;
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
    }

    dotRefs.current.forEach((dot, index) => {
      if (dot) dot.classList.toggle("active", index === currentIndex);
    });
  };

  useEffect(() => {
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    const handleNext = () => {
      if (currentIndex < totalItems - visibleItemsCount) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNext);
      prevButton.addEventListener("click", handlePrev);
    }

    const handleResize = () => updateCarouselPosition();
    window.addEventListener("resize", handleResize);

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNext);
        prevButton.removeEventListener("click", handlePrev);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, totalItems]);

  useEffect(() => {
    updateCarouselPosition();
  }, [currentIndex]);

  const isNextButtonDisabled = currentIndex >= totalItems - visibleItemsCount;
  const isPrevButtonDisabled = currentIndex <= 0;

  return (
    <div>
      <div className="text-center text-3xl font-bold underline">
        Coups De cœur
      </div>
      <div className="carousel">
        <div className="carousel-items" ref={carouselRef}>
          {items.map((item, index) => (
            <div
              className="carousel-card"
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <img
                className="card-image"
                src={`/img/${item.src}`}
                alt={`Slide ${index + 1}`}
              />
              <div className="text-center">
                <h3 class="no-underline text-base ">{item.title}</h3>
                <p class=" no-underline text-sm font-thin ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            id="prev-button"
            className="w-12 h-12 rounded-full bg-transparent bg-gray-400 text-blue-400 text-5xl border-none font-mono font-bold"
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
              )
            }
            disabled={isPrevButtonDisabled}
          >
            ←
          </button>
          <button
            id="next-button"
            className="w-12 h-12 rounded-full bg-transparent  text-blue-400 text-5xl border-none font-mono font-bold"
            onClick={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
            disabled={isNextButtonDisabled}
          >
            →
          </button>
        </div>
        <ul className="dots">
          {items.map((_, index) => (
            <li key={index} ref={(el) => (dotRefs.current[index] = el)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
