"use client";

import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { GiShop } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

type BottomNavigationProps = {
  handleShowMenu: () => void;
};

export const BottomNavigation = ({ handleShowMenu }: BottomNavigationProps) => {
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
        <Link href="#" className="flex flex-col items-center">
          <GiShop className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Cửa hàng</p>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <FaHeart className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Yêu thích</p>
        </Link>
        <Link href="#" className="flex flex-col items-center">
          <FaShoppingCart className="text-xl text-yellow-500" />
          <p className="text-xs font-semibold text-black">Giỏ hàng</p>
        </Link>
      </div>
    </div>
  );
};
