import { Product } from "@/src/types/product";
import React from "react";
import { FaStar } from "react-icons/fa";
import { ProductCard } from "../product/ProductCard";
import { FaAngleRight } from "react-icons/fa";

type DiscountProps = {
  products: Product[];
};

export const Discount = ({ products }: DiscountProps) => {
  return (
    <div className="bg-[#D3000c] border border-gray-200 rounded-lg">
      <div className="flex items-center gap-2 p-5">
        <FaStar className="text-2xl text-yellow-500" />
        <p className="text-xl font-bold text-white">Khuyến mãi online</p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2  p-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-2"
          >
            <ProductCard key={product._id} product={product} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center p-5">
        <button className="border border-gray-200 rounded-lg p-2 flex items-center cursor-pointer hover:bg-gray-200 transition-colors duration-300 bg-white gap-2">
          <p className="text-sm font-bold text-blue-600">Xem thêm sản phẩm</p>
          <FaAngleRight className="text-sm font-bold text-blue-600" />
        </button>
      </div>
    </div>
  );
};
