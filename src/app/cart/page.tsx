"use client";

import React from "react";
import { useCart } from "@/src/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { BsCartX } from "react-icons/bs";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  if (items.length === 0) {
    return (
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-10">
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <BsCartX className="text-6xl text-gray-300" />
          <h1 className="text-2xl font-bold text-gray-500">Giỏ hàng trống</h1>
          <p className="text-gray-400">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
          <Link
            href="/product"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-5 space-y-5">
      <h1 className="text-2xl font-bold text-black">
        Giỏ hàng ({items.reduce((s, i) => s + i.quantity, 0)} sản phẩm)
      </h1>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Cart items */}
        <div className="flex-1 space-y-3">
          {items.map((item) => (
            <div
              key={item.variantId}
              className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg"
            >
              <Link href={`/product/${item.slug}`} className="shrink-0">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                      No image
                    </div>
                  )}
                </div>
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/product/${item.slug}`}>
                  <h3 className="text-sm font-semibold text-black line-clamp-2 hover:text-blue-500">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500 mt-1">
                  Phân loại: {item.variantName}
                </p>
                <p className="text-sm font-bold text-red-500 mt-1">
                  {formatPrice(item.price)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    <FaMinus className="text-xs" />
                  </button>
                  <span className="w-10 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 cursor-pointer"
                  >
                    <FaPlus className="text-xs" />
                  </button>
                  <button
                    onClick={() => removeItem(item.variantId)}
                    className="ml-auto p-2 text-red-400 hover:text-red-600 cursor-pointer"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 underline cursor-pointer"
          >
            Xóa tất cả
          </button>
        </div>

        {/* Order summary */}
        <div className="lg:w-80 shrink-0">
          <div className="sticky top-5 p-5 bg-white border border-gray-200 rounded-lg space-y-4">
            <h2 className="text-lg font-bold text-black">Tóm tắt đơn hàng</h2>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tạm tính</span>
              <span className="font-medium text-black">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Phí vận chuyển</span>
              <span className="text-green-500 font-medium">Miễn phí</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="font-bold text-black">Tổng cộng</span>
              <span className="font-bold text-red-500 text-lg">{formatPrice(totalPrice)}</span>
            </div>
            <Link
              href="/checkout"
              className="block w-full py-3 bg-red-500 text-white text-center rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Đặt hàng ({items.reduce((s, i) => s + i.quantity, 0)})
            </Link>
            <Link
              href="/product"
              className="block w-full py-3 border border-gray-300 text-center rounded-lg font-medium text-black hover:bg-gray-50 transition-colors"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
