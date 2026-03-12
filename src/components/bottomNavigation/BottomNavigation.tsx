"use client";

import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { GiShop } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

type BottomNavigationProps = {
  handleShowMenu: () => void;
};

export const BottomNavigation = ({ handleShowMenu }: BottomNavigationProps) => {
  const { totalItems } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 w-full bg-white">
      <div className="p-5 border-t border-gray-200 bg-white rounded-t-lg flex items-center justify-around gap-5">
        <Link href="/" className="flex flex-col items-center">
          <FaHome className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Trang chủ</p>
        </Link>
        <button
          type="button"
          onClick={handleShowMenu}
          className="flex flex-col items-center cursor-pointer"
        >
          <BiSolidCategory className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Danh mục</p>
        </button>
        <Link href="/product" className="flex flex-col items-center">
          <GiShop className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Cửa hàng</p>
        </Link>
        <Link href="/cart" className="flex flex-col items-center">
          <div className="relative">
            <FaShoppingCart className="text-xl text-yellow-500" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </div>
          <p className="text-xs font-semibold text-black">Giỏ hàng</p>
        </Link>
      </div>
    </div>
  );
};
