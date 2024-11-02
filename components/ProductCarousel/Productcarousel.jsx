"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Productcarousel.scss";

const Carousel = () => {
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);
  const dotRefs = useRef([]);
  const [produits, setProduits] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8080/products");
      const data = await response.json();
      setProduits(data);
    };

    fetchProducts();
  }, []);

  const totalItems = produits.length;
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
    updateCarouselPosition();
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < totalItems - visibleItemsCount) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const isNextButtonDisabled = currentIndex >= totalItems - visibleItemsCount;
  const isPrevButtonDisabled = currentIndex <= 0;

  return (
    <div>
      <div className="text-center text-3xl font-bold underline">
        Coups De cœur
      </div>
      <div className="carousel">
        <div className="carousel-items" ref={carouselRef}>
          {produits.map((product, index) => (
            <div
              className="carousel-card"
              key={product.id}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="w-50 h-64 flex flex-col items-center justify-center">
                <img
                  className="card-image "
                  src={`http://localhost:8080/images/${product.picture}`}
                  alt={product.name}
                />
              </div>

              <div className="text-center">
                <h3 className="no-underline text-base">{product.name}</h3>
                <p className="no-underline text-sm font-thin">
                  {product.brand.name} - MAD {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button
            className="w-12 h-12 rounded-full bg-transparent text-blue-400 text-5xl border-none font-mono font-bold"
            onClick={handlePrev}
            disabled={isPrevButtonDisabled}
          >
            ←
          </button>
          <button
            className="w-12 h-12 rounded-full bg-transparent text-blue-400 text-5xl border-none font-mono font-bold"
            onClick={handleNext}
            disabled={isNextButtonDisabled}
          >
            →
          </button>
        </div>
        <ul className="dots">
          {produits.map((_, index) => (
            <li key={index} ref={(el) => (dotRefs.current[index] = el)} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
