import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

type Props = {
  onClick: () => void;
};

export const SearchMobile = ({ onClick }: Props) => {
  return (
    <div className="bg-white h-full w-full flex items-center justify-center p-5 gap-2">
      <div className="bg-white flex border border-gray-200 rounded-lg focus-within:border-blue-500 transition-colors duration-300 flex-1 items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 focus:outline-none placeholder:text-sm placeholder:tracking-tighter placeholder:text-gray-400"
          placeholder="Bạn muốn mua gì hôm này?"
        />
        <CiSearch className="text-gray-700 mr-2" />
      </div>
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
