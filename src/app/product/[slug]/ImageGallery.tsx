"use client";

import { ImageType } from "@/src/types/product";
import Image from "next/image";
import { useState } from "react";

export function ImageGallery({ images }: { images: ImageType[] }) {
  const [active, setActive] = useState(0);

  if (!images.length) {
    return (
      <div className="w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center text-gray-300 text-sm">
        Không có ảnh
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="w-full aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
        <Image
          src={images[active].url}
          alt="Ảnh sản phẩm"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-1">
          {images.map((img, i) => (
            <button
              key={img.public_id}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === active ? "border-orange-400" : "border-gray-100 hover:border-gray-300"
              }`}
            >
              <Image
                src={img.url}
                alt={`Ảnh ${i + 1}`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
