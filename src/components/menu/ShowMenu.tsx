"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

type category = {
  _id: string;
  name: string;
  image: { url: string; public_id: string };
  slug: string;
  parentId: string | null;
};

type menuProps = {
  categories: category[];
  onClose: () => void;
};

export const ShowMenu = ({ categories, onClose }: menuProps) => {
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
              onClick={onClose}
              type="button"
              onMouseEnter={() => handleActiveMenu(cate._id)}
              key={cate._id}
              className="flex items-center justify-between cursor-pointer p-1 hover:bg-gray-200 transition-colors duration-300 w-full"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={cate.image.url}
                  alt={cate.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
                <p className="text-sm text-black">{cate.name}</p>
              </div>
              <FaAngleRight className="text-sm text-gray-500" />
            </Link>
          ))}
      </div>
      {activeMenu && (
        <div className="w-4/5 bg-white border border-gray-200 rounded-lg shadow-lg p-5 space-y-2">
          <div className="flex gap-2 flex-wrap">
            {categories
              .filter((cate) => cate.parentId === activeMenu)
              .map((cate) => (
                <Link
                  href={`/product?cate=${cate.slug}`}
                  onClick={onClose}
                  type="button"
                  key={cate._id}
                  className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-200 transition-colors duration-300 border border-gray-200 rounded-lg gap-2"
                >
                  <Image
                    src={cate.image.url}
                    alt={cate.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                  <p className="text-sm text-black">{cate.name}</p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
