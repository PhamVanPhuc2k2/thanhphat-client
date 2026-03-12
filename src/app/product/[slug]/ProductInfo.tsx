"use client";

import { useState } from "react";
import { Product, Variant } from "@/src/types/product";
import { useCart } from "@/src/context/CartContext";
import { FaStar, FaClipboardCheck, FaCartPlus } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
  variants: Variant[];
};

export function ProductInfo({ product, variants }: Props) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    variants[0] ?? null,
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const price = selectedVariant?.discountPrice ?? product.price;
  const oldPrice = selectedVariant?.price ?? product.oldPrice;
  const discount = selectedVariant?.percentDiscount ?? product.discountPercent;
  const stock = selectedVariant?.stock ?? 0;

  const handleAddToCart = () => {
    if (!selectedVariant || stock === 0) return;
    addItem({
      productId: product._id,
      variantId: selectedVariant._id,
      name: product.name,
      variantName: selectedVariant.name,
      price: selectedVariant.discountPrice,
      quantity,
      image: selectedVariant.images?.[0]?.url || product.images?.[0]?.url,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  return (
    <div className="space-y-4">
      {/* Brand */}
      {product.brandId && (
        <p className="text-xs text-gray-400">
          Thương hiệu:{" "}
          <span className="font-medium text-blue-500">{product.brandId.name}</span>
        </p>
      )}

      {/* Title */}
      <h1 className="text-lg md:text-xl font-semibold text-gray-800 leading-snug">
        {product.name}
      </h1>

      {/* Rating placeholder */}
      <div className="flex items-center gap-1 text-yellow-400 text-sm">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
        <span className="text-gray-400 text-xs ml-1">(5.0)</span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-2xl font-bold text-orange-500 tabular-nums">
          {price.toLocaleString("vi-VN")}₫
        </span>
        {oldPrice > price && (
          <>
            <span className="text-base text-gray-400 line-through tabular-nums">
              {oldPrice.toLocaleString("vi-VN")}₫
            </span>
            {discount > 0 && (
              <span className="px-1.5 py-0.5 rounded text-xs font-semibold bg-orange-100 text-orange-500">
                -{discount}%
              </span>
            )}
          </>
        )}
      </div>

      {/* Variants */}
      {variants.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-700">Phân loại:</p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v._id}
                type="button"
                onClick={() => {
                  setSelectedVariant(v);
                  setQuantity(1);
                }}
                disabled={v.stock === 0}
                className={`px-3 py-2 border rounded-lg flex items-center gap-2 text-sm relative transition-colors ${
                  selectedVariant?._id === v._id
                    ? "border-orange-500 bg-orange-50"
                    : "border-gray-200 hover:border-orange-300"
                } ${v.stock === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {v.images?.[0]?.url && (
                  <img
                    src={v.images[0].url}
                    alt={v.name}
                    className="w-7 h-7 object-cover rounded"
                  />
                )}
                <span className="text-gray-700">{v.name}</span>
                {v.stock === 0 && (
                  <span className="text-xs text-red-400 ml-1">Hết</span>
                )}
                {selectedVariant?._id === v._id && (
                  <FaClipboardCheck className="absolute -top-1 -right-1 text-orange-500 text-xs" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stock */}
      <p
        className={`text-sm font-medium ${stock > 0 ? "text-green-600" : "text-red-500"}`}
      >
        {stock > 0 ? `Còn ${stock} sản phẩm` : "Hết hàng"}
      </p>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold text-gray-700">Số lượng:</p>
        <div className="flex items-center border border-gray-200 rounded-lg divide-x divide-gray-200">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors"
          >
            <AiOutlineMinus />
          </button>
          <div className="h-10 w-12 flex items-center justify-center text-sm text-gray-700 font-medium">
            {quantity}
          </div>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
            disabled={quantity >= stock}
            className="h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <MdOutlineAdd />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={stock === 0}
          className="py-3 border border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Mua ngay
        </button>
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={stock === 0}
          className={`py-3 transition-colors text-white rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 ${
            added
              ? "bg-green-500 hover:bg-green-600"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          <FaCartPlus />
          {added ? "Đã thêm!" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}
