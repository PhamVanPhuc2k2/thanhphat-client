"use client";

import { Product } from "@/src/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

type TypeProps = {
  product: Product;
};

export const ProductCard = ({ product }: TypeProps) => {
  const [activeLike, setActiveLike] = useState<boolean>(false);

  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="relative p-2 min-w-44 w-full rounded-lg shadow-lg border border-gray-200 bg-white">
        <div className="rounded-lg p-2 overflow-hidden">
          <Image
            src={product.image}
            alt="ảnh sản phẩm"
            width={1200}
            height={900}
            draggable={false}
            className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="">
          <p className="text-sm text-gray-700 line-clamp-2 min-h-[2.8rem] group-hover:text-blue-800 transition-colors duration-300">
            {product.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-red-500 font-bold tabular-nums">
            {product.price.toLocaleString("vi-VN")}₫
          </p>
          <p className="text-xs  line-through text-gray-400 tabular-nums">
            {product.oldPrice.toLocaleString("vi-VN")}₫
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="text-lg text-yellow-500" />
            <p className="text-lg text-black font-semibold">5</p>
          </div>
          <button
            onMouseEnter={() => setActiveLike(true)}
            onMouseLeave={() => setActiveLike(false)}
            className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
          >
            {activeLike ? (
              <FaHeart className="text-xl text-red-500 animation-heart" />
            ) : (
              <CiHeart className="text-xl text-red-500" />
            )}
            <p className="text-xs sm:text-sm text-[#3B82F6]">Yêu thích</p>
          </button>
        </div>
        <div className="absolute px-3 bg-[#D80019] rounded-r rounded-b -top-2.5 left-4">
          <span className="text-white text-xs relative">
            -{product.discountPercent}%
            <span className="-top-[5px] -left-5 absolute -bottom-2 w-0 h-0 border-r-8 border-t-8 border-r-[#A00113] border-t-transparent" />
          </span>
        </div>
      </div>
    </Link>
  );
};
