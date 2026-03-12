"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

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

type PropType = {
  banners: BannerType[];
};

export const Hero = ({ banners }: PropType) => {
  const [current, setCurrent] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAuto = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
        stopAuto();
      }}
      onMouseLeave={() => {
        setIsHover(false);
        startAuto();
      }}
      className="w-full h-full overflow-hidden relative rounded-lg"
    >
      {/* slider */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out rounded-lg"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.length > 0 &&
          banners.map((banner) => (
            <div key={banner._id} className="w-full h-full shrink-0 rounded-lg">
              <Image
                src={banner.image.url}
                alt="Ảnh banner"
                className="w-full h-full object-cover rounded-lg"
                height={40}
                width={40}
              />
            </div>
          ))}
      </div>

      {/* prev */}
      <button
        onClick={prev}
        className={`absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/30 rounded-full transition-all ${
          isHover
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        <FaAngleLeft className="text-2xl text-white" />
      </button>

      {/* next */}
      <button
        onClick={next}
        className={`absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/30 rounded-full transition-all ${
          isHover
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        <FaAngleRight className="text-2xl text-white" />
      </button>
    </div>
  );
};
