"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IoMdStarOutline } from "react-icons/io";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { MdNewReleases } from "react-icons/md";

const sortOptions = [
  { label: "Mới nhất", value: "newest", Icon: MdNewReleases },
  { label: "Giá Thấp - Cao", value: "price_asc", Icon: GoSortAsc },
  { label: "Giá Cao - Thấp", value: "price_desc", Icon: GoSortDesc },
  { label: "Phổ biến", value: "popular", Icon: IoMdStarOutline },
];

export function SortFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") ?? "newest";

  const onSelect = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.delete("page");
    router.push(`/product?${params}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {sortOptions.map(({ label, value, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => onSelect(value)}
          className={`px-3 py-1.5 flex border items-center gap-1.5 transition-colors duration-200 rounded-full cursor-pointer text-sm font-medium ${
            currentSort === value
              ? "border-blue-500 bg-blue-50 text-blue-600"
              : "border-gray-200 bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          <Icon className="text-base" />
          {label}
        </button>
      ))}
    </div>
  );
}
