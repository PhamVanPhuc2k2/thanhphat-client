import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

type SearchParams = { code?: string };

export default async function OrderSuccessPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolved = await searchParams;
  const orderCode = resolved.code || "";

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-10">
      <div className="flex flex-col items-center justify-center gap-5 py-20 max-w-lg mx-auto text-center">
        <FaCheckCircle className="text-6xl text-green-500" />
        <h1 className="text-2xl font-bold text-black">Đặt hàng thành công!</h1>
        <p className="text-gray-600">
          Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ xác nhận đơn hàng sớm nhất.
        </p>

        {orderCode && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg w-full">
            <p className="text-sm text-gray-600">Mã đơn hàng của bạn</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">{orderCode}</p>
            <p className="text-xs text-gray-500 mt-2">
              Vui lòng lưu lại mã đơn hàng để tra cứu trạng thái
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/order-tracking"
            className="flex-1 py-3 border border-blue-500 text-blue-500 text-center rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Tra cứu đơn hàng
          </Link>
          <Link
            href="/"
            className="flex-1 py-3 bg-blue-500 text-white text-center rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
