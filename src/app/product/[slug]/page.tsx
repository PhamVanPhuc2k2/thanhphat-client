import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { fetchProductBySlug } from "@/src/lib/api";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";
import { ProductCard } from "@/src/components/product/ProductCard";
import { ProductDetailResponse } from "@/src/types/product";
import { ImageGallery } from "./ImageGallery";
import { ProductInfo } from "./ProductInfo";
import { AiOutlineFileProtect } from "react-icons/ai";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = (await fetchProductBySlug(slug)) as ProductDetailResponse | null;
  if (!data) return { title: "Sản phẩm không tồn tại" };

  const { product } = data;
  return {
    title: product.seo?.title || product.name,
    description:
      product.seo?.description ||
      product.description?.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: product.seo?.title || product.name,
      description: product.seo?.description,
      images: product.seo?.ogImage?.url
        ? [{ url: product.seo.ogImage.url }]
        : product.images?.[0]?.url
          ? [{ url: product.images[0].url }]
          : [],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = (await fetchProductBySlug(slug)) as ProductDetailResponse | null;
  if (!data) notFound();

  const { product, variants, relatedProducts } = data;

  // Merge product images + variant images (deduplicated by public_id)
  const allImages = [
    ...product.images,
    ...variants.flatMap((v) => v.images),
  ].filter(
    (img, i, arr) => arr.findIndex((x) => x.public_id === img.public_id) === i,
  );

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/product" },
    ...(product.categoryId
      ? [
          {
            label: product.categoryId.name,
            href: `/product?cate=${product.categoryId.slug}`,
          },
        ]
      : []),
    { label: product.name },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-3 space-y-3">
        <Breadcrumb items={breadcrumbItems} />

        {/* Main card */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <ImageGallery images={allImages} />
            </div>
            <div className="lg:col-span-3">
              <ProductInfo product={product} variants={variants} />
            </div>
          </div>
        </div>

        {/* Specs + Warranty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.specs && product.specs.length > 0 && (
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 space-y-3">
              <p className="text-base font-semibold text-gray-800">
                Thông số kỹ thuật
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-100">
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-5 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <div className="col-span-2 p-2.5 text-sm font-medium text-gray-600 border-r border-gray-100">
                      {spec.key}
                    </div>
                    <div className="col-span-3 p-2.5 text-sm text-gray-700">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 space-y-3">
            <div className="flex items-center gap-2">
              <AiOutlineFileProtect className="text-2xl text-orange-500" />
              <p className="text-base font-semibold text-gray-800">
                Chính sách bảo hành & đổi trả
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700 mb-0.5">
                  Đổi trả trong 15 ngày
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Sản phẩm phải còn nguyên seal, chưa qua sử dụng. Liên hệ
                  shop trước khi gửi yêu cầu trả hàng.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-0.5">
                  Bảo hành chính hãng
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Bảo hành theo chính sách của nhà sản xuất.{" "}
                  <Link
                    href="/page/chinh-sach-bao-hanh"
                    className="text-blue-500 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Mô tả sản phẩm
            </p>
            <div
              className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        )}

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
            <p className="text-base font-semibold text-gray-800 mb-3">
              Có thể bạn cũng thích
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {relatedProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
