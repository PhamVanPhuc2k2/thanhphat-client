import React from "react";
import { FaAngleRight, FaNewspaper } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/src/types/article";

type Props = {
  articles: Article[];
};

export const News = ({ articles }: Props) => {
  if (!articles.length) return null;

  return (
    <div className="space-y-3">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-green-600 rounded-full shrink-0" />
          <h2 className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide flex items-center gap-2">
            <FaNewspaper className="text-green-600 text-base" />
            Tin tức
          </h2>
        </div>
        <Link
          href="/article"
          className="flex items-center gap-1 text-sm text-green-600 hover:text-green-800 font-medium transition-colors shrink-0"
        >
          Xem tất cả
          <FaAngleRight className="text-xs" />
        </Link>
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/article/${article.slug}`}
            className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={article.thumbnail.url}
                alt={article.title}
                width={600}
                height={400}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 space-y-1.5">
              <p className="text-xs text-gray-400">
                {new Date(article.createdAt).toLocaleDateString("vi-VN")}
              </p>
              <p className="text-sm text-gray-800 font-semibold line-clamp-3 group-hover:text-green-700 transition-colors duration-200 leading-snug">
                {article.title}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-1">
                Đọc thêm <FaAngleRight className="text-[10px]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
