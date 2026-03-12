"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProductCarousel } from "./ProductCarousel";
import Link from "next/link";
import { Category } from "@/src/types/category";
import { Product } from "@/src/types/product";

type Props = {
  category: Category;
  children: Category[];
  products: Product[];
};

export const CategoryProduct = ({ category, children, products }: Props) => {
  const scrollSubCate = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollButtons = () => {
    if (!scrollSubCate.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollSubCate.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleButtonLeft = () => {
    scrollSubCate.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const handleButtonRight = () => {
    scrollSubCate.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollSubCate.current;
    if (!container) return;
    setIsDragging(true);
    e.preventDefault();
    setStartX(e.pageX - container.offsetLeft);
    setScrollStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollSubCate.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    container.scrollLeft = scrollStart - (x - startX);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  useEffect(() => {
    const container = scrollSubCate.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
      {/* Section header */}
      <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-red-50 to-white border-b border-red-100">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-red-500 rounded-full shrink-0" />
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
            {category.name}
          </h2>
        </div>
        <Link
          href={`/product?cate=${category.slug}`}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700 font-medium transition-colors shrink-0"
        >
          Xem tất cả
          <FaAngleRight className="text-xs" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Category image */}
        <div className="w-full md:w-1/5 shrink-0">
          <Image
            src={category.image.url}
            alt={category.name}
            width={400}
            height={600}
            className="w-full h-40 md:h-full object-cover"
          />
        </div>

        <div className="w-full md:w-4/5">
          {/* Subcategories scroll */}
          {children.length > 0 && (
            <div className="relative">
              <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                ref={scrollSubCate}
                className="flex overflow-x-auto scrollbar-hide"
              >
                <div className="p-2 flex items-center gap-2">
                  {children.map((sub) => (
                    <Link
                      key={sub._id}
                      href={`/product?cate=${sub.slug}`}
                      className="flex flex-col w-25 md:w-36 md:flex-row items-center gap-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300 shrink-0"
                    >
                      <Image
                        src={sub.image.url}
                        alt={sub.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-cover rounded-lg"
                      />
                      <p className="text-sm text-black line-clamp-2">
                        {sub.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={handleButtonLeft}
                className={`absolute top-1/3 left-0 bg-white/60 p-2 rounded-lg cursor-pointer transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <FaAngleLeft className="text-lg" />
              </button>
              <button
                type="button"
                onClick={handleButtonRight}
                className={`absolute top-1/3 right-0 bg-white/60 p-2 rounded-lg cursor-pointer transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <FaAngleRight className="text-lg" />
              </button>
            </div>
          )}

          {/* Products */}
          <div className="px-2 pb-2">
            <ProductCarousel products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};
