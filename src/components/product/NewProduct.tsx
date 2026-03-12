"use client";

import { Product } from "@/src/types/product";
import React, { useEffect, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { FaAngleLeft, FaAngleRight, FaFire } from "react-icons/fa6";
import Link from "next/link";

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
    <div className="rounded-xl border border-orange-100 bg-linear-to-br from-orange-50 via-white to-blue-50">
      {/* Section header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <FaFire className="text-orange-500 text-xl shrink-0" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide">
            Sản phẩm mới
          </h2>
          <span className="hidden sm:inline-block h-4 w-px bg-gray-300 mx-1" />
          <span className="hidden sm:inline text-sm text-gray-400">
            Hàng mới cập nhật
          </span>
        </div>
        <Link
          href="/product"
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors shrink-0"
        >
          Xem tất cả
          <FaAngleRight className="text-xs" />
        </Link>
      </div>

      <div className="relative px-3 pb-3">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex pt-2 gap-2 overflow-x-auto scroll-smooth cursor-grab scrollbar-hide"
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
          className={`absolute top-1/2 left-1 -translate-y-1/2 p-2 rounded-full cursor-pointer bg-white shadow-md border border-gray-100 ${
            !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <FaAngleLeft className="text-lg text-gray-600" />
        </button>

        <button
          onClick={handleButtonRight}
          disabled={!canScrollRight}
          className={`absolute top-1/2 right-1 -translate-y-1/2 p-2 rounded-full cursor-pointer bg-white shadow-md border border-gray-100 ${
            !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-200`}
        >
          <FaAngleRight className="text-lg text-gray-600" />
        </button>
      </div>
    </div>
  );
};
