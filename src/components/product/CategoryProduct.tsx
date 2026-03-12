"use client";

import React, { useEffect, useRef, useState } from "react";
import category from "@/src/images/category.png";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ProductCarousel } from "./ProductCarousel";
import hero1 from "@/src/images/hero1.webp";

const categoryProduct = {
  categoryId: "cate1",
  name: "Dụng cụ thủy lực",
  subCategories: [
    {
      subCategoryId: "sub1",
      image: "https://picsum.photos/200?random=1",
      name: "Máy đột thủy lực",
    },
    {
      subCategoryId: "sub2",
      image: "https://picsum.photos/200?random=2",
      name: "Máy bơm điện thủy lực",
    },
    {
      subCategoryId: "sub3",
      image: "https://picsum.photos/200?random=3",
      name: "Máy uống ống thủy lực",
    },
    {
      subCategoryId: "sub4",
      image: "https://picsum.photos/200?random=4",
      name: "Máy cắt V thủy lực",
    },
    {
      subCategoryId: "sub5",
      image: "https://picsum.photos/200?random=5",
      name: "Đầu cắt cáp thủy lực",
    },
    {
      subCategoryId: "sub6",
      image: "https://picsum.photos/200?random=6",
      name: "Cờ lê thủy lực",
    },
    {
      subCategoryId: "sub7",
      image: "https://picsum.photos/200?random=7",
      name: "Đầu ép cos thủy lực",
    },
    {
      subCategoryId: "sub8",
      image: "https://picsum.photos/200?random=8",
      name: "Kìm bấm cốt tay",
    },
    {
      subCategoryId: "sub9",
      image: "https://picsum.photos/200?random=9",
      name: "Kích thủy lực",
    },
    {
      subCategoryId: "sub10",
      image: "https://picsum.photos/200?random=10",
      name: "Máy uốn V thủy lực",
    },
  ],
  brands: [
    { id: "b1", name: "Havit Home" },
    { id: "b2", name: "NovaLiving" },
    { id: "b3", name: "HomeEase" },
    { id: "b4", name: "MegaTool" },
    { id: "b5", name: "ProGear" },
    { id: "b6", name: "IronForce" },
    { id: "b7", name: "PureCook" },
    { id: "b8", name: "TitanWorks" },
    { id: "b9", name: "ZenKitchen" },
    { id: "b10", name: "SteelPro" },
  ],
  products: [
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
      description:
        "Máy khoan động lực 550W, dùng cho gia đình và công trình nhỏ",
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
  ],
};

export const CategoryProduct = () => {
  const scrollSubCate = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollStart, setScrollStart] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const updateScrollButtons = () => {
    if (!scrollSubCate.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollSubCate.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleButtonLeft = () => {
    if (scrollSubCate.current) {
      scrollSubCate.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const handleButtonRight = () => {
    if (scrollSubCate.current) {
      scrollSubCate.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollSubCate.current;
    if (!container) return;
    setIsDragging(true);
    e.preventDefault();
    setStartX(e.pageX - container.offsetLeft);
    setScrollStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const container = scrollSubCate.current;
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
    const container = scrollSubCate.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:hidden">
        <Image
          src={hero1}
          alt="ảnh danh mục"
          width={1200}
          height={900}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/5 hidden md:flex">
        <Image
          src={category}
          alt="ảnh danh mục"
          width={1200}
          height={900}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-4/5">
        <div className="p-5 w-full bg-linear-to-b from-[#FFFFFF] to-[#FBE7E7]">
          <p className="text-lg uppercase text-red-500 font-semibold">
            Dụng cụ thủy lực
          </p>
        </div>
        <div className="relative">
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            ref={scrollSubCate}
            className="flex overflow-x-auto scrollbar-hide"
          >
            <div className="p-2 flex items-center gap-2">
              {categoryProduct.subCategories.map((subCate) => (
                <button
                  key={subCate.subCategoryId}
                  className="flex flex-col w-25 md:w-40 md:flex-row items-center gap-2 p-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors duration-300 shrink-0"
                >
                  <Image
                    src={subCate.image}
                    alt="ảnh submenu"
                    width={1200}
                    height={900}
                    className="h-10 w-10 object-cover rounded-lg"
                  />
                  <p className="text-sm text-black line-clamp-2">
                    {subCate.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="absolute top-1/3 left-0">
            <button
              type="button"
              onClick={handleButtonLeft}
              disabled={!canScrollLeft}
              className={`bg-white/50 p-2 rounded-lg cursor-pointer ${
                canScrollLeft
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <FaAngleLeft className="text-lg" />
            </button>
          </div>
          <div className="absolute top-1/3 right-0">
            <button
              type="button"
              onClick={handleButtonRight}
              disabled={!canScrollRight}
              className={`bg-white/50 p-2 rounded-lg cursor-pointer ${
                canScrollRight
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <FaAngleRight className="text-lg" />
            </button>
          </div>
        </div>
        <div className="p-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {categoryProduct.brands.map((brand) => (
            <button
              key={brand.id}
              className="p-2 border bg-white shrink-0 border-gray-200 rounded-full hover:bg-gray-200 transition-colors duration-300 text-black text-sm cursor-pointer"
            >
              {brand.name}
            </button>
          ))}
        </div>
        <div className="w-full">
          <ProductCarousel products={categoryProduct.products} />
        </div>
      </div>
    </div>
  );
};
