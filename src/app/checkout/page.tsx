"use client";

import React, { useState } from "react";
import { useCart } from "@/src/context/CartContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    // Validation
    if (!form.name.trim()) return setError("Vui lòng nhập họ tên");
    if (!form.phone.trim() || form.phone.length < 9) return setError("Số điện thoại không hợp lệ");
    if (!form.address.trim()) return setError("Vui lòng nhập địa chỉ");

    setLoading(true);
    setError("");

    try {
      const orderData = {
        customer: {
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || undefined,
          address: form.address.trim(),
          note: form.note.trim() || undefined,
        },
        items: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId,
          name: item.name,
          variantName: item.variantName,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
      };

      const res = await fetch(`${API_URL}/api/order/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Đặt hàng thất bại");
      }

      const result = await res.json();
      const orderCode = result.data?.order?.orderCode || "";
      clearCart();
      router.push(`/order-success?code=${orderCode}`);
    } catch (err: any) {
      setError(err.message || "Đã có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-10">
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <h1 className="text-2xl font-bold text-gray-500">Giỏ hàng trống</h1>
          <Link
            href="/product"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Quay lại mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-5 space-y-5">
      <h1 className="text-2xl font-bold text-black">Đặt hàng</h1>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-5">
        {/* Customer info */}
        <div className="flex-1 space-y-4">
          <div className="p-5 bg-white border border-gray-200 rounded-lg space-y-4">
            <h2 className="text-lg font-bold text-black">Thông tin khách hàng</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="0901234567"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (tùy chọn)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Địa chỉ giao hàng <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ghi chú
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="Ghi chú thêm cho đơn hàng..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black resize-none"
              />
            </div>
          </div>

          <div className="p-5 bg-white border border-gray-200 rounded-lg">
            <h2 className="text-lg font-bold text-black mb-3">Phương thức thanh toán</h2>
            <div className="flex items-center gap-3 p-3 border-2 border-blue-500 rounded-lg bg-blue-50">
              <input type="radio" checked readOnly className="accent-blue-500" />
              <div>
                <p className="font-semibold text-black">Thanh toán khi nhận hàng (COD)</p>
                <p className="text-sm text-gray-500">Bạn sẽ thanh toán bằng tiền mặt khi nhận được hàng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="lg:w-96 shrink-0">
          <div className="sticky top-5 p-5 bg-white border border-gray-200 rounded-lg space-y-4">
            <h2 className="text-lg font-bold text-black">Đơn hàng của bạn</h2>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <div key={item.variantId} className="flex gap-3">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-black font-medium line-clamp-2">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.variantName} × {item.quantity}</p>
                    <p className="text-sm font-bold text-red-500">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tạm tính</span>
              <span className="font-medium text-black">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Phí vận chuyển</span>
              <span className="text-green-500 font-medium">Miễn phí</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="font-bold text-black text-lg">Tổng cộng</span>
              <span className="font-bold text-red-500 text-lg">{formatPrice(totalPrice)}</span>
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 p-2 rounded">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Đang xử lý..." : "Xác nhận đặt hàng"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
