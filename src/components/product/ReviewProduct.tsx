import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const shorts = [
  {
    _id: 1,
    product: {
      productId: "p1",
      name: "OPPO Find X9 12GB 256GB",
      image: "https://picsum.photos/200?random=1",
      price: 22990000,
      discountPrice: 10000000,
      linkVideo: "https://www.youtube.com/embed/9Bv5ltkBBaM",
    },
  },
  {
    _id: 2,
    product: {
      productId: "p2",
      name: "OPPO Find X9 12GB 256GB",
      image: "https://picsum.photos/200?random=2",
      price: 22990000,
      discountPrice: 10000000,
      linkVideo: "https://www.youtube.com/embed/9Bv5ltkBBaM",
    },
  },
  {
    _id: 3,
    product: {
      productId: "p3",
      name: "OPPO Find X9 12GB 256GB",
      image: "https://picsum.photos/200?random=3",
      price: 22990000,
      discountPrice: 10000000,
      linkVideo: "https://www.youtube.com/embed/9Bv5ltkBBaM",
    },
  },
  {
    _id: 4,
    product: {
      productId: "p4",
      name: "OPPO Find X9 12GB 256GB",
      image: "https://picsum.photos/200?random=4",
      price: 22990000,
      discountPrice: 10000000,
      linkVideo: "https://www.youtube.com/embed/9Bv5ltkBBaM",
    },
  },
];

export const ReviewProduct = () => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h2 className="text-xl font-bold text-black uppercase">
          Review sản phẩm
        </h2>
        <span className="text-xl font-extralight text-gray-400">|</span>
        <button className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
          <p className="text-blue-500 text-sm">Xem Youtube</p>
          <FaAngleRight className="text-blue-500 text-sm" />
        </button>
      </div>
      <div className="flex overflow-x-auto w-full scrollbar-hide">
        <div className="flex gap-2">
          {shorts.map((short) => (
            <div
              key={short._id}
              className="w-[calc((100%-0.5rem)/2)] lg:w-[calc((100%-2.5rem)/4)] rounded-lg shrink-0 bg-white shadow-lg border border-gray-200"
            >
              <iframe
                src={short.product.linkVideo}
                className="w-full min-w-44 aspect-[9/12] rounded-t-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <div className="flex items-center gap-2 p-2">
                <Image
                  src={short.product.image}
                  alt="ảnh sản phẩm"
                  width={1200}
                  height={900}
                  className="h-15 w-15 object-cover rounded-lg"
                />
                <div className="">
                  <p className="text-sm font-semibold text-black">
                    {short.product.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-red-500">
                      {short.product.discountPrice.toLocaleString("vi-VN")}₫
                    </p>
                    <p className="text-xs text-gray-400 line-through font-semibold">
                      {short.product.price.toLocaleString("vi-VN")}₫
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
