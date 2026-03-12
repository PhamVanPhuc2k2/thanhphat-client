"use client";

import { Product } from "@/src/types/product";
import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

type TypeProps = {
  products: Product[];
};

export const NewProduct = ({ products }: TypeProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleButtonLeft = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].clientWidth + 8;
    scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const handleButtonRight = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0].clientWidth + 8;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = x - startX;
      scrollRef.current.scrollLeft = scrollStart - walk;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, scrollStart]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, [products]);

  return (
    <div className="border-2 border-[#89B4FB] rounded-lg bg-linear-to-br from-[#FFEBF4] to-[#FFC29E]">
      <div className="flex items-center justify-center">
        <p className="w-1/2 md:w-1/3 p-2 text-white bg-linear-to-b from-[#9FACEE] to-[#659CF7] text-center rounded-b-4xl md:text-xl font-bold">
          SẢN PHẨM MỚI
        </p>
      </div>

      <div className="relative p-2">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex pt-3 gap-2 overflow-x-auto scroll-smooth cursor-grab scrollbar-hide"
          onMouseDown={handleMouseDown}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="shrink-0 w-[calc((100%-0.5rem)/2)] md:w-[calc((100%-1rem)/3)] lg:w-[calc((100%-2rem)/5)]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          onClick={handleButtonLeft}
          disabled={!canScrollLeft}
          className={`absolute top-1/2 left-1 -translate-y-1/2 p-2 rounded-full cursor-pointer bg-white/50 ${
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaAngleLeft className="text-2xl text-gray-700" />
        </button>

        <button
          onClick={handleButtonRight}
          disabled={!canScrollRight}
          className={`absolute top-1/2 right-1 -translate-y-1/2 p-2 rounded-full cursor-pointer bg-white/50 ${
            !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaAngleRight className="text-2xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};
