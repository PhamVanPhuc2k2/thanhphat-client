"use client";

import { Banner as BannerType } from "@/src/types/banner";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  data: BannerType[];
};

export default function Banner({ data }: Props) {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (data.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [data.length]);

  if (!data.length) return null;

  return (
    <div className="relative w-full h-40 lg:h-72 overflow-hidden">
      {data.map((banner, i) => {
        const image = (
          <Image
            src={banner.image.url}
            alt="banner"
            width={1200}
            height={900}
            className="w-full h-full object-cover rounded-lg"
          />
        );
        return (
          <div
            className={`w-full h-full absolute inset-0 transition-opacity duration-700 ${
              i === index
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            key={banner._id}
          >
            {banner.link ? <Link href={banner.link}>{image}</Link> : image}
          </div>
        );
      })}
    </div>
  );
}
