"use client";

import { Brand } from "@/src/types/brand";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  brands: Brand[];
};

export function BrandFilter({ brands }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onSelect = (slug: Brand["slug"]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", slug);
    router.push(`/product?${params}`);
  };
  const onClearBrand = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("brand");
    router.push(`/product?${params.toString()}`);
  };

  return (
    <div className="">
      {brands.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-black">Thương hiệu</h2>
          <div className="flex overflow-x-auto custom-scrollbar">
            <div className="min-w-md flex gap-2">
              <button
                type="button"
                onClick={onClearBrand}
                className={`p-2 border rounded-lg shrink-0 text-sm font-semibold transition-colors duration-300 ${
                  searchParams.has("brand")
                    ? "border-gray-200 text-black"
                    : "border-blue-500 text-blue-500"
                }`}
              >
                Tất cả thương hiệu
              </button>
              {brands.map((brand) => (
                <button
                  type="button"
                  onClick={() => onSelect(brand.slug)}
                  key={brand._id}
                  className={`p-1 rounded-lg bg-white cursor-pointer border shrink-0 transition-colors duration-300 ${
                    searchParams.get("brand") === brand.slug
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  {brand.logo?.url ? (
                    <Image
                      src={brand.logo.url}
                      alt={brand.name}
                      width={1200}
                      height={900}
                      className="w-28 h-10 object-contain rounded-lg"
                    />
                  ) : (
                    <span className="w-28 h-10 flex items-center justify-center text-xs font-semibold text-gray-600">
                      {brand.name}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
