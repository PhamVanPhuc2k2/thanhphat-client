"use client";

import { Product } from "@/src/types/product";
import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type TypeProps = {
  products: Product[];
};

export const ProductCarousel = ({ products }: TypeProps) => {
  const productRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollButtons = () => {
    if (!productRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = productRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleButtonLeft = () => {
    if (productRef.current) {
      productRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleButtonRight = () => {
    if (productRef.current) {
      productRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = productRef.current;
    if (!container) return;
    setIsDragging(true);
    e.preventDefault();
    setStartX(e.pageX - container.offsetLeft);
    setScrollStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = productRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = productRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative">
      <button
        type="button"
        disabled={!canScrollLeft}
        onClick={handleButtonLeft}
        className={`p-3 absolute top-1/2 -left-2 z-10 bg-white/50 cursor-pointer rounded-lg ${
          canScrollLeft ? "flex" : "hidden"
        }`}
      >
        <FaChevronLeft className="text-black text-xl" />
      </button>
      <button
        type="button"
        disabled={!canScrollRight}
        onClick={handleButtonRight}
        className={`p-3 absolute top-1/2 -right-2 z-10 bg-white/50 cursor-pointer rounded-lg ${
          canScrollRight ? "flex" : "hidden"
        }`}
      >
        <FaChevronRight className="text-black text-xl" />
      </button>
      <div
        ref={productRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full overflow-x-auto scrollbar-hide pt-3"
      >
        <div className="flex gap-2">
          {products.map((product) => (
            <div
              key={product._id}
              className="w-[calc((100%-0.5rem)/2)] md:w-[calc((100%-1rem)/3)] lg:w-[calc((100%-1.5rem)/4)] shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
