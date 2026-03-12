import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchArticles } from "@/src/lib/api";
import { Article } from "@/src/types/article";
import { FaNewspaper, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức mới nhất từ Thành Phát - dụng cụ điện, thiết bị công nghiệp.",
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const LIMIT = 9;

export default async function ArticleListPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const data = await fetchArticles(page, LIMIT);
  const articles: Article[] = data?.articles ?? [];
  const pagination = data?.pagination ?? { page: 1, totalPages: 1, total: 0 };

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-4 space-y-4">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-1 h-7 bg-green-600 rounded-full shrink-0" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2">
            <FaNewspaper className="text-green-600" />
            Tin tức
          </h1>
          <span className="text-sm text-gray-400 ml-auto">{pagination.total} bài viết</span>
        </div>

        {articles.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            <FaNewspaper className="text-5xl mx-auto mb-3 opacity-30" />
            <p>Chưa có bài viết nào</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article) => (
                <Link
                  key={article._id}
                  href={`/article/${article.slug}`}
                  className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="overflow-hidden aspect-video">
                    <Image
                      src={article.thumbnail.url}
                      alt={article.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 space-y-2">
                    <p className="text-xs text-gray-400">
                      {new Date(article.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                    <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors leading-snug flex-1">
                      {article.title}
                    </h2>
                    {article.excerpt && (
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-auto">
                      Đọc thêm <FaAngleRight className="text-[10px]" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 py-4">
                {page > 1 && (
                  <Link
                    href={`/article?page=${page - 1}`}
                    className="flex items-center gap-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <FaAngleLeft className="text-xs" /> Trước
                  </Link>
                )}
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                  .filter((p) => Math.abs(p - page) <= 2)
                  .map((p) => (
                    <Link
                      key={p}
                      href={`/article?page=${p}`}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm border transition-colors ${
                        p === page
                          ? "bg-green-600 text-white border-green-600 font-semibold"
                          : "border-gray-200 text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                {page < pagination.totalPages && (
                  <Link
                    href={`/article?page=${page + 1}`}
                    className="flex items-center gap-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    Tiếp <FaAngleRight className="text-xs" />
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
