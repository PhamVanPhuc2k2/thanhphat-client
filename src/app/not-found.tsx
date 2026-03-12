import { LottiePlayer } from "@/src/components/lottie/LottiePlayer";
import React from "react";
import animation404 from "@/src/assets/lottie/404.json";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-72 h-72">
        <LottiePlayer animationData={animation404} />
      </div>
      <h1 className="text-3xl font-bold">Không tìm thấy trang</h1>
      <Link href="/" className="px-4 py-2 bg-black text-white rounded-lg">
        Về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
