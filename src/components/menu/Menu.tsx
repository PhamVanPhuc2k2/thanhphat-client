"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Hero } from "../hero/Hero";
import Link from "next/link";

type category = {
  _id: string;
  name: string;
  image: string;
  slug: string;
  parentId: string | null;
};

type BannerType = {
  _id: string;
  title: string;
  image: {
    url: string;
    public_id: string;
  };
  categoryId: string;
  link: string;
};

type menuProps = {
  categories: category[];
  banners: BannerType[];
};

export const Menu = ({ categories, banners }: menuProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleActiveMenu = (id: string) => {
    setActiveMenu(id);
  };

  return (
    <div
      onMouseLeave={() => setActiveMenu(null)}
      className="w-full h-auto flex gap-2"
    >
      <div className="hidden md:block w-1/5 border border-gray-200 rounded-lg shadow-lg bg-white py-2">
        {categories
          .filter((cate) => cate.parentId === null)
          .map((cate) => (
            <Link
              href={`/product?cate=${cate.slug}`}
              type="button"
              onMouseEnter={() => handleActiveMenu(cate._id)}
              key={cate._id}
              className="flex items-center justify-between cursor-pointer p-1 hover:bg-gray-200 transition-colors duration-300 w-full"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={cate.image}
                  alt="Ảnh"
                  width={1200}
                  height={900}
                  className="h-10 w-10 object-cover"
                />
                <p className="text-sm text-black">{cate.name}</p>
              </div>
              <FaAngleRight className="text-sm text-gray-500" />
            </Link>
          ))}
      </div>
      {activeMenu ? (
        <div className="w-4/5 bg-white border border-gray-200 rounded-lg shadow-lg p-5 space-y-2">
          <div className="flex gap-2 flex-wrap">
            {categories
              .filter((cate) => cate.parentId === activeMenu)
              .map((cate) => (
                <Link
                  href={`/product?cate=${cate.slug}`}
                  type="button"
                  key={cate._id}
                  className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 transition-colors duration-300 border border-gray-200 rounded-lg gap-2"
                >
                  <Image
                    src={cate.image}
                    alt="Ảnh"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                  <p className="text-sm text-black">{cate.name}</p>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className="w-full md:w-4/5 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Hero banners={banners} />
        </div>
      )}
    </div>
  );
};
