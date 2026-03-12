"use client";

import React, { useEffect, useRef, useState } from "react";
import { Product } from "@/src/types/product";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const products: Product[] = [
  {
    _id: "p01",
    name: "Nồi cơm điện Sharp 1.8L",
    slug: "noi-com-dien-sharp-18l",
    category: "do-gia-dung",
    oldPrice: 1700000,
    price: 1450000,
    discountPercent: 15,
    stock: 35,
    brand: "Sharp",
    image: "https://picsum.photos/200",
    description: "Nồi cơm điện dung tích 1.8L, phù hợp gia đình 4–6 người",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p02",
    name: "Ấm đun nước siêu tốc Philips 1.7L",
    slug: "am-sieu-toc-philips-17l",
    category: "do-gia-dung",
    oldPrice: 1050000,
    price: 890000,
    discountPercent: 15,
    stock: 50,
    brand: "Philips",
    image: "https://picsum.photos/200",
    description: "Ấm siêu tốc công suất 2200W, đun sôi nhanh",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p03",
    name: "Quạt đứng Panasonic F-308NHB",
    slug: "quat-dung-panasonic-f308",
    category: "do-gia-dung",
    oldPrice: 1850000,
    price: 1650000,
    discountPercent: 11,
    stock: 20,
    brand: "Panasonic",
    image: "https://picsum.photos/200",
    description: "Quạt đứng 3 tốc độ gió, vận hành êm ái",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p04",
    name: "Bếp gas đôi Rinnai RV-7Slim",
    slug: "bep-gas-doi-rinnai-rv7",
    category: "do-gia-dung",
    oldPrice: 2450000,
    price: 2150000,
    discountPercent: 12,
    stock: 15,
    brand: "Rinnai",
    image: "https://picsum.photos/200",
    description: "Bếp gas đôi mặt kính chịu lực, tiết kiệm gas",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p05",
    name: "Máy khoan cầm tay Bosch GSB 550",
    slug: "may-khoan-bosch-gsb-550",
    category: "dung-cu-co-khi",
    oldPrice: 1500000,
    price: 1250000,
    discountPercent: 17,
    stock: 40,
    brand: "Bosch",
    image: "https://picsum.photos/200",
    description: "Máy khoan động lực 550W, dùng cho gia đình và công trình nhỏ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p06",
    name: "Máy mài góc Makita 9553B",
    slug: "may-mai-goc-makita-9553b",
    category: "dung-cu-co-khi",
    oldPrice: 1150000,
    price: 980000,
    discountPercent: 15,
    stock: 30,
    brand: "Makita",
    image: "https://picsum.photos/200",
    description: "Máy mài góc công suất 710W, bền bỉ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p07",
    name: "Bộ cờ lê – mỏ lết đa năng 12 chi tiết",
    slug: "bo-co-le-mo-let-12",
    category: "dung-cu-co-khi",
    oldPrice: 780000,
    price: 650000,
    discountPercent: 17,
    stock: 60,
    brand: "Tolsen",
    image: "https://picsum.photos/200",
    description: "Bộ dụng cụ cơ khí đa năng cho sửa chữa gia đình",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p08",
    name: "Máy cắt sắt Total TS920405",
    slug: "may-cat-sat-total-ts920405",
    category: "dung-cu-co-khi",
    oldPrice: 2800000,
    price: 2450000,
    discountPercent: 13,
    stock: 10,
    brand: "Total",
    image: "https://picsum.photos/200",
    description: "Máy cắt sắt công suất lớn, dùng trong xưởng cơ khí",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p09",
    name: "Nồi chiên không dầu Lock&Lock 5.2L",
    slug: "noi-chien-khong-dau-locklock-52l",
    category: "do-gia-dung",
    oldPrice: 3200000,
    price: 2850000,
    discountPercent: 11,
    stock: 25,
    brand: "Lock&Lock",
    image: "https://picsum.photos/200",
    description: "Nồi chiên không dầu dung tích lớn, ít dầu mỡ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p10",
    name: "Máy hút bụi Electrolux Z1220",
    slug: "may-hut-bui-electrolux-z1220",
    category: "do-gia-dung",
    oldPrice: 2250000,
    price: 1950000,
    discountPercent: 13,
    stock: 18,
    brand: "Electrolux",
    image: "https://picsum.photos/200",
    description: "Máy hút bụi nhỏ gọn, lực hút mạnh",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p11",
    name: "Máy hàn que Hồng Ký HK200A",
    slug: "may-han-hong-ky-hk200a",
    category: "dung-cu-co-khi",
    oldPrice: 3700000,
    price: 3250000,
    discountPercent: 12,
    stock: 12,
    brand: "Hồng Ký",
    image: "https://picsum.photos/200",
    description: "Máy hàn que công suất 200A, dùng cho thợ chuyên nghiệp",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p12",
    name: "Bộ tua vít đa năng 32 đầu",
    slug: "bo-tua-vit-da-nang-32",
    category: "dung-cu-co-khi",
    oldPrice: 390000,
    price: 320000,
    discountPercent: 18,
    stock: 80,
    brand: "Stanley",
    image: "https://picsum.photos/200",
    description: "Bộ tua vít đa năng 32 đầu, tiện lợi sửa chữa",
    isActive: true,
    sold: 10,
  },
];

export const RecentlyViewed = () => {
  const productRef = useRef<HTMLDivElement | null>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollButtons = () => {
    if (!productRef.current) return;
    const { clientWidth, scrollLeft, scrollWidth } = productRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleButtonLeft = () => {
    if (productRef.current) {
      productRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const handleButtonRight = () => {
    if (productRef.current) {
      productRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = productRef.current;
    if (!container) return;
    setIsDragging(true);
    e.preventDefault();
    setStartX(e.pageX - container.offsetLeft);
    setScrollStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = productRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = productRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full shrink-0" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide">
            Sản phẩm đã xem
          </h2>
        </div>
        <Link
          href="/product"
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors shrink-0"
        >
          Xem thêm
          <FaChevronRight className="text-xs" />
        </Link>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={handleButtonLeft}
          className={`absolute top-1/2 left-0 z-10 p-2 bg-white/50 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300 ${
            canScrollLeft ? "flex" : "hidden"
          }`}
        >
          <FaChevronLeft className="text-black text-xl" />
        </button>
        <button
          type="button"
          onClick={handleButtonRight}
          className={`absolute top-1/2 right-0 z-10 p-2 bg-white/50 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300 ${
            canScrollRight ? "flex" : "hidden"
          }`}
        >
          <FaChevronRight className="text-black text-xl" />
        </button>
        <div
          ref={productRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full overflow-x-auto scrollbar-hide pt-3"
        >
          <div className="flex gap-2">
            {products.map((product) => (
              <div
                key={product._id}
                className="w-[calc((100%-0.5rem)/2)] md:w-[calc((100%-1rem)/3)] lg:w-[calc((100%-2rem)/5)] shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
