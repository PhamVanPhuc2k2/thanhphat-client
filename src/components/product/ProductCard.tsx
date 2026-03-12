"use client";

import { Product } from "@/src/types/product";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const WISHLIST_KEY = "wishlist";

type TypeProps = {
  product: Product;
};

export const ProductCard = ({ product }: TypeProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const stored: string[] = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
    setIsWishlisted(stored.includes(product._id));
  }, [product._id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const stored: string[] = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
    const isIn = stored.includes(product._id);
    const updated = isIn
      ? stored.filter((id) => id !== product._id)
      : [...stored, product._id];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
    setIsWishlisted(!isIn);
  };

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative w-full rounded-xl shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300">
        {/* Discount badge — chỉ hiện khi có giảm giá */}
        {product.discountPercent > 0 && (
          <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
            -{product.discountPercent}%
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/90 shadow-sm hover:scale-110 transition-transform duration-200"
        >
          {isWishlisted ? (
            <FaHeart className="text-sm text-red-500" />
          ) : (
            <CiHeart className="text-base text-gray-400" />
          )}
        </button>

        {/* Image + slide-up cart button */}
        <div className="relative overflow-hidden rounded-t-xl bg-gray-50 p-3">
          <Image
            src={product.images?.[0]?.url ?? "https://picsum.photos/400"}
            alt={product.name}
            width={400}
            height={400}
            draggable={false}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute inset-x-0 bottom-0 py-2.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold flex items-center justify-center gap-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          >
            <FaCartPlus className="text-sm" />
            Thêm vào giỏ
          </button>
        </div>

        {/* Info */}
        <div className="p-3 space-y-1.5">
          <p className="text-sm text-gray-700 line-clamp-2 min-h-10 group-hover:text-blue-700 transition-colors duration-200 font-medium leading-tight">
            {product.name}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-base text-red-500 font-bold tabular-nums">
              {product.price.toLocaleString("vi-VN")}₫
            </span>
            {product.oldPrice > product.price && (
              <span className="text-xs line-through text-gray-400 tabular-nums">
                {product.oldPrice.toLocaleString("vi-VN")}₫
              </span>
            )}
          </div>
          <span className={`text-xs font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
            {product.stock > 0 ? "Còn hàng" : "Hết hàng"}
          </span>
        </div>
      </div>
    </Link>
  );
};
