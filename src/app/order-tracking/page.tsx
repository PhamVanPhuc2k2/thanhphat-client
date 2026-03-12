"use client";

import React, { useState } from "react";
import { FaSearch, FaTruck, FaCheckCircle, FaTimesCircle, FaBoxOpen, FaClock } from "react-icons/fa";
import { Order } from "@/src/types/order";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

const statusConfig: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  pending: { label: "Chờ xác nhận", color: "text-yellow-500", icon: <FaClock /> },
  confirmed: { label: "Đã xác nhận", color: "text-blue-500", icon: <FaCheckCircle /> },
  shipping: { label: "Đang giao hàng", color: "text-orange-500", icon: <FaTruck /> },
  completed: { label: "Hoàn thành", color: "text-green-500", icon: <FaCheckCircle /> },
  cancelled: { label: "Đã hủy", color: "text-red-500", icon: <FaTimesCircle /> },
};

export default function OrderTrackingPage() {
  const [orderCode, setOrderCode] = useState("");
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderCode.trim() || !phone.trim()) {
      setError("Vui lòng nhập mã đơn hàng và số điện thoại");
      return;
    }

    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const params = new URLSearchParams({ orderCode: orderCode.trim(), phone: phone.trim() });
      const res = await fetch(`${API_URL}/api/order/track?${params}`);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Không tìm thấy đơn hàng");
      }
      const result = await res.json();
      setOrder(result.data?.order || null);
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  const status = order ? statusConfig[order.status] : null;

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-5 space-y-5">
      <h1 className="text-2xl font-bold text-black">Tra cứu đơn hàng</h1>

      <form onSubmit={handleSearch} className="p-5 bg-white border border-gray-200 rounded-lg space-y-4 max-w-lg">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mã đơn hàng</label>
          <input
            type="text"
            value={orderCode}
            onChange={(e) => setOrderCode(e.target.value)}
            placeholder="Ví dụ: TP260310-ABC123"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0901234567"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
        </div>

        {error && <p className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 cursor-pointer"
        >
          <FaSearch />
          {loading ? "Đang tìm..." : "Tra cứu"}
        </button>
      </form>

      {order && status && (
        <div className="p-5 bg-white border border-gray-200 rounded-lg space-y-4">
          <div className="flex items-center gap-3">
            <FaBoxOpen className="text-2xl text-blue-500" />
            <div>
              <h2 className="text-lg font-bold text-black">Đơn hàng: {order.orderCode}</h2>
              <p className="text-sm text-gray-500">
                Ngày đặt: {new Date(order.createdAt).toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <div className={`flex items-center gap-2 p-3 rounded-lg bg-gray-50 ${status.color}`}>
            <span className="text-xl">{status.icon}</span>
            <span className="font-bold text-lg">{status.label}</span>
          </div>

          {order.cancelReason && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">
                <strong>Lý do hủy:</strong> {order.cancelReason}
              </p>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-black mb-2">Thông tin người nhận</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Họ tên:</strong> {order.customer.name}</p>
              <p><strong>SĐT:</strong> {order.customer.phone}</p>
              {order.customer.email && <p><strong>Email:</strong> {order.customer.email}</p>}
              <p><strong>Địa chỉ:</strong> {order.customer.address}</p>
              {order.customer.note && <p><strong>Ghi chú:</strong> {order.customer.note}</p>}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-2">Sản phẩm</h3>
            <div className="space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <div>
                    <p className="text-sm font-medium text-black">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.variantName} × {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-black">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          </div>

          <hr />
          <div className="flex justify-between items-center">
            <span className="font-bold text-black text-lg">Tổng cộng</span>
            <span className="font-bold text-red-500 text-xl">{formatPrice(order.totalAmount)}</span>
          </div>
          <p className="text-sm text-gray-500">Thanh toán: Khi nhận hàng (COD)</p>
        </div>
      )}
    </div>
  );
}
