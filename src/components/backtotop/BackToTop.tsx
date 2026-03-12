import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

export const BackToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-24 right-5 z-50 p-2 rounded-lg bg-black flex items-center gap-2 transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <p className="text-sm text-white font-semibold">Lên đầu</p>
      <FaAngleDoubleUp className="text-sm text-white" />
    </button>
  );
};
