import React from "react";
import { FaAngleRight } from "react-icons/fa";
import hero1 from "../../images/hero1.webp";
import Image from "next/image";

export const News = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-black uppercase">Tin tức</h2>
        <span className="text-xl font-extralight text-gray-400">|</span>
        <button className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
          <p className="text-blue-500 text-sm">Xem tất cả</p>
          <FaAngleRight className="text-blue-500 text-sm" />
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
          <Image
            src={hero1}
            alt="banner tin tức"
            width={1200}
            height={900}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="text-sm text-black font-semibold line-clamp-3 mt-3">
            Đây là ảnh thực tế và video trải nghiệm mô hình máy ép thủy lực.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
          <Image
            src={hero1}
            alt="banner tin tức"
            width={1200}
            height={900}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="text-sm text-black font-semibold line-clamp-3 mt-3">
            Đây là ảnh thực tế và video trải nghiệm mô hình máy ép thủy lực.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
          <Image
            src={hero1}
            alt="banner tin tức"
            width={1200}
            height={900}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="text-sm text-black font-semibold line-clamp-3 mt-3">
            Đây là ảnh thực tế và video trải nghiệm mô hình máy ép thủy lực.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-lg">
          <Image
            src={hero1}
            alt="banner tin tức"
            width={1200}
            height={900}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="text-sm text-black font-semibold line-clamp-3 mt-3">
            Đây là ảnh thực tế và video trải nghiệm mô hình máy ép thủy lực.
          </p>
        </div>
      </div>
    </div>
  );
};
