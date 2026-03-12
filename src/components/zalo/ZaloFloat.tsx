"use client";

import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";

const PHONE = "0868491679";
const ZALO_URL = `https://zalo.me/${PHONE}`;

export const ZaloFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-black/80 text-white text-xs rounded-lg px-3 py-1.5 whitespace-nowrap animate-fade-in">
          {PHONE}
        </div>
      )}

      {/* Phone button */}
      <a
        href={`tel:${PHONE}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        title={`Gọi ${PHONE}`}
        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 animate-bounce-slow"
      >
        <FaPhone className="text-white text-lg" />
      </a>

      {/* Zalo button */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat Zalo"
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 overflow-hidden"
      >
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="48" height="48" rx="24" fill="#0068FF" />
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, sans-serif">
            Zalo
          </text>
        </svg>
      </a>
    </div>
  );
};
