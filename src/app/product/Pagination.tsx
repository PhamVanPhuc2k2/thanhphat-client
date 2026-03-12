"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  totalPages: number;
  currentPage: number;
};

export function Pagination({ totalPages, currentPage }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const onPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`/product?${params}`);
  };

  const getPages = () => {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 py-4">
      <button
        onClick={() => onPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronLeft className="text-xs text-gray-600" />
      </button>

      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPage(page)}
          className={`min-w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
            page === currentPage
              ? "border-blue-500 bg-blue-500 text-white"
              : "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <FaChevronRight className="text-xs text-gray-600" />
      </button>
    </div>
  );
}
