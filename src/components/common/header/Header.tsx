"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "@/src/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SearchMobile } from "./SearchMobile";
import { BsShop } from "react-icons/bs";
import { ShowMenu } from "../../menu/ShowMenu";
import { Category } from "@/src/types/category";
import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";

type HeaderProps = {
  categories: Category[];
};

export const Header = ({ categories }: HeaderProps) => {
  const { totalItems } = useCart();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) router.push(`/product?search=${encodeURIComponent(q)}`);
  };
  const handleShowSearch = () => {
    setShowSearch(true);
  };
  const handleCanShow = () => {
    setShowSearch(false);
  };

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (e: PointerEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="sticky top-0 z-40">
      <div className="relative w-full">
        {/* Header top */}
        <div className="bg-[#FFD500] py-2">
          <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex items-center gap-2">
            <div className="overflow-hidden">
              <div className="flex items-center gap-2 whitespace-nowrap animation-marquee">
                <p className="text-sm font-semibold text-black">
                  Chào mừng bạn đến với siêu thị điện máy Thành Phát
                </p>
                <span className="h-1 w-1 bg-black rounded-full block"></span>
                <p className="text-sm font-semibold text-black">
                  Miễn phí vận chuyển đơn hàng trị giá trên 1.000.000₫
                </p>
                <span className="h-1 w-1 bg-black rounded-full block"></span>
                <p className="text-sm font-semibold text-black">
                  Sản phẩm chính hãng - Xuất VAT đầy đủ
                </p>
                <span className="h-1 w-1 bg-black rounded-full block"></span>
              </div>
            </div>
            <div className="items-center gap-2 flex mr-10">
              <button className="border-l-2 border-black px-2 cursor-pointer group shrink-0">
                <p className="text-sm text-black font-semibold group-hover:text-orange-500 transition-colors duration-300">
                  Đăng nhập
                </p>
              </button>
              <button className="border-l-2 hidden lg:flex border-black px-2 cursor-pointer group items-center gap-2">
                <FaPhoneAlt className="text-sm text-black" />
                <p className="text-sm text-black font-semibold group-hover:text-black transition-colors duration-300">
                  0868491679
                </p>
              </button>
            </div>
          </div>
        </div>
        {/* Header bottom */}
        <div className="sticky top-0 bg-black py-2">
          <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex items-center gap-5 justify-between">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image
                  src={logo}
                  alt="log"
                  width={1200}
                  height={900}
                  className="w-72 h-15 object-cover"
                />
              </Link>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setShowMenu(true)}
                className="p-2 hidden bg-orange-500 rounded-lg md:flex items-center gap-2 cursor-pointer hover:bg-orange-600 transition-colors duration-300"
              >
                <BiCategory className="text-white" />
                <p className=" text-white">Danh mục</p>
                <FaAngleDown className="text-white" />
              </button>
            </div>
            <div className="shrink-0">
              <Link
                href={"/product"}
                className="p-2 hidden bg-orange-500 rounded-lg md:flex items-center gap-2 cursor-pointer hover:bg-orange-600 transition-colors duration-300"
              >
                <BsShop className="text-white" />
                <p className=" text-white">Cửa hàng</p>
              </Link>
            </div>
            <form
              onSubmit={handleSearch}
              className="bg-white hidden md:flex border border-gray-200 rounded-lg focus-within:border-blue-500 transition-colors duration-300 flex-1 items-center gap-2"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 p-2 focus:outline-none placeholder:text-sm placeholder:tracking-tighter placeholder:text-gray-400"
                placeholder="Bạn muốn mua gì hôm này?"
              />
              <button type="submit" className="p-2 cursor-pointer">
                <CiSearch className="text-gray-700" />
              </button>
            </form>
            {/* search mobile */}
            <div className="">
              <button
                type="button"
                onClick={handleShowSearch}
                className="p-3 md:hidden bg-white rounded-lg items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              >
                <CiSearch className="text-black" />
              </button>
            </div>
            <div className="shrink-0">
              <Link
                href="/cart"
                className="p-2 hidden md:flex bg-orange-500 rounded-lg items-center gap-2 cursor-pointer hover:bg-orange-600 transition-colors duration-300 relative"
              >
                <p className="text-white">Giỏ hàng</p>
                <div className="relative">
                  <AiOutlineShoppingCart className="text-white" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                      {totalItems > 99 ? "99+" : totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Search Mobile */}
        <div
          className={`absolute top-0 h-full w-full md:hidden transition-all duration-300 ease-in-out ${
            showSearch
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <SearchMobile onClick={handleCanShow} />
        </div>
      </div>
      {/* Show menu */}
      <div
        className={`fixed inset-0 bg-black/50 ${showMenu ? "flex" : "hidden"}`}
      >
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto relative">
          <div ref={menuRef} className="absolute top-30 right-0 w-full">
            <ShowMenu
              categories={categories}
              onClose={() => setShowMenu(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
