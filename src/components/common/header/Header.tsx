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

const categories: Category[] = [
  {
    _id: "c1",
    image: "https://picsum.photos/200",
    name: "Dụng cụ điện",
    slug: "dung-cu-dien",
    parentId: null,
  },
  {
    _id: "c2",
    image: "https://picsum.photos/200",
    name: "Dụng cụ cầm tay",
    slug: "dung-cu-cam-tay",
    parentId: null,
  },
  {
    _id: "c3",
    image: "https://picsum.photos/200",
    name: "Thiết bị công nghiệp",
    slug: "thiet-bi-cong-nghiep",
    parentId: null,
  },
  {
    _id: "c4",
    image: "https://picsum.photos/200",
    name: "Máy móc xây dựng",
    slug: "may-moc-xay-dung",
    parentId: null,
  },
  {
    _id: "c5",
    image: "https://picsum.photos/200",
    name: "Thiết bị điện",
    slug: "thiet-bi-dien",
    parentId: null,
  },
  {
    _id: "c6",
    image: "https://picsum.photos/200",
    name: "Phụ kiện máy",
    slug: "phu-kien-may",
    parentId: null,
  },
  {
    _id: "c7",
    image: "https://picsum.photos/200",
    name: "Thiết bị đo lường",
    slug: "thiet-bi-do-luong",
    parentId: null,
  },
  {
    _id: "c8",
    image: "https://picsum.photos/200",
    name: "Vật tư cơ khí",
    slug: "vat-tu-co-khi",
    parentId: null,
  },
  {
    _id: "c9",
    image: "https://picsum.photos/200",
    name: "Thiết bị an toàn",
    slug: "thiet-bi-an-toan",
    parentId: null,
  },
  {
    _id: "c10",
    image: "https://picsum.photos/200",
    name: "Thiết bị gia dụng",
    slug: "thiet-bi-gia-dung",
    parentId: null,
  },

  {
    _id: "c1-1",
    image: "https://picsum.photos/200",
    name: "Máy khoan",
    slug: "may-khoan",
    parentId: "c1",
  },
  {
    _id: "c1-2",
    image: "https://picsum.photos/200",
    name: "Máy mài",
    slug: "may-mai",
    parentId: "c1",
  },
  {
    _id: "c1-3",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-4",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-5",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-6",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-7",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-8",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-9",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-10",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },

  {
    _id: "c1-1-1",
    image: "https://picsum.photos/200",
    name: "Khoan bê tông",
    slug: "khoan-be-tong",
    parentId: "c1-1",
  },
  {
    _id: "c1-1-2",
    image: "https://picsum.photos/200",
    name: "Khoan pin",
    slug: "khoan-pin",
    parentId: "c1-1",
  },

  {
    _id: "c2-1",
    image: "https://picsum.photos/200",
    name: "Búa",
    slug: "bua",
    parentId: "c2",
  },
  {
    _id: "c2-2",
    image: "https://picsum.photos/200",
    name: "Cờ lê - mỏ lết",
    slug: "co-le-mo-let",
    parentId: "c2",
  },
  {
    _id: "c2-3",
    image: "https://picsum.photos/200",
    name: "Tua vít",
    slug: "tua-vit",
    parentId: "c2",
  },

  {
    _id: "c3-1",
    image: "https://picsum.photos/200",
    name: "Máy nén khí",
    slug: "may-nen-khi",
    parentId: "c3",
  },
  {
    _id: "c3-2",
    image: "https://picsum.photos/200",
    name: "Máy phát điện",
    slug: "may-phat-dien",
    parentId: "c3",
  },

  {
    _id: "c4-1",
    name: "Máy trộn bê tông",
    image: "https://picsum.photos/200",
    slug: "may-tron-be-tong",
    parentId: "c4",
  },
  {
    _id: "c4-2",
    image: "https://picsum.photos/200",
    name: "Máy đầm",
    slug: "may-dam",
    parentId: "c4",
  },

  {
    _id: "c5-1",
    image: "https://picsum.photos/200",
    name: "Ổ cắm - công tắc",
    slug: "o-cam-cong-tac",
    parentId: "c5",
  },
  {
    _id: "c5-2",
    image: "https://picsum.photos/200",
    name: "Dây điện",
    slug: "day-dien",
    parentId: "c5",
  },

  {
    _id: "c6-1",
    image: "https://picsum.photos/200",
    name: "Mũi khoan",
    slug: "mui-khoan",
    parentId: "c6",
  },
  {
    _id: "c6-2",
    image: "https://picsum.photos/200",
    name: "Đá cắt",
    slug: "da-cat",
    parentId: "c6",
  },

  {
    _id: "c7-1",
    image: "https://picsum.photos/200",
    name: "Thước đo",
    slug: "thuoc-do",
    parentId: "c7",
  },
  {
    _id: "c7-2",
    image: "https://picsum.photos/200",
    name: "Máy đo điện",
    slug: "may-do-dien",
    parentId: "c7",
  },

  {
    _id: "c8-1",
    image: "https://picsum.photos/200",
    name: "Bulông - ốc vít",
    slug: "bu-long-oc-vit",
    parentId: "c8",
  },
  {
    _id: "c8-2",
    image: "https://picsum.photos/200",
    name: "Thanh ren",
    slug: "thanh-ren",
    parentId: "c8",
  },

  {
    _id: "c9-1",
    image: "https://picsum.photos/200",
    name: "Mũ bảo hộ",
    slug: "mu-bao-ho",
    parentId: "c9",
  },
  {
    _id: "c9-2",
    image: "https://picsum.photos/200",
    name: "Găng tay bảo hộ",
    slug: "gang-tay-bao-ho",
    parentId: "c9",
  },

  {
    _id: "c10-1",
    image: "https://picsum.photos/200",
    name: "Quạt điện",
    slug: "quat-dien",
    parentId: "c10",
  },
  {
    _id: "c10-2",
    image: "https://picsum.photos/200",
    name: "Nồi cơm điện",
    slug: "noi-com-dien",
    parentId: "c10",
  },
];

export const Header = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
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
            <div className="bg-white hidden md:flex border border-gray-200 rounded-lg focus-within:border-blue-500 transition-colors duration-300 flex-1 items-center gap-2">
              <input
                type="text"
                className="flex-1 p-2 focus:outline-none placeholder:text-sm placeholder:tracking-tighter placeholder:text-gray-400"
                placeholder="Bạn muốn mua gì hôm này?"
              />
              <CiSearch className="text-gray-700 mr-2" />
            </div>
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
              <button className="p-2 hidden md:flex bg-orange-500 rounded-lg items-center gap-2 cursor-pointer hover:bg-orange-600 transition-colors duration-300">
                <p className=" text-white">Giỏ hàng</p>
                <AiOutlineShoppingCart className="text-white" />
              </button>
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
