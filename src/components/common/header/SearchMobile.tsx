"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";

type Props = {
  onClick: () => void;
};

export const SearchMobile = ({ onClick }: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/product?search=${encodeURIComponent(q)}`);
      onClick();
    }
  };

  return (
    <div className="bg-white h-full w-full flex items-center justify-center p-5 gap-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex border border-gray-200 rounded-lg focus-within:border-blue-500 transition-colors duration-300 flex-1 items-center gap-2"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="flex-1 p-2 focus:outline-none placeholder:text-sm placeholder:tracking-tighter placeholder:text-gray-400"
          placeholder="Bạn muốn mua gì hôm này?"
        />
        <button type="submit" className="p-2 cursor-pointer">
          <CiSearch className="text-gray-700" />
        </button>
      </form>
      <button
        type="button"
        onClick={() => onClick()}
        className="border border-gray-200 rounded-lg p-3"
      >
        <IoIosClose />
      </button>
    </div>
  );
};
