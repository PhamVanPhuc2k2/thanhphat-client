import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchArticleBySlug, fetchArticles } from "@/src/lib/api";
import { Article } from "@/src/types/article";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";
import { FaNewspaper, FaAngleRight, FaEye, FaClock } from "react-icons/fa";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchArticleBySlug(slug);
  if (!data) return { title: "Bài viết không tồn tại" };

  const { article } = data;
  return {
    title: article.seo?.title || article.title,
    description:
      article.seo?.description ||
      article.excerpt ||
      article.content?.replace(/<[^>]*>/g, "").slice(0, 160),
    openGraph: {
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.excerpt,
      images: article.thumbnail?.url ? [{ url: article.thumbnail.url }] : [],
      type: "article",
      publishedTime: article.publishedAt || article.createdAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const [data, relatedData] = await Promise.all([
    fetchArticleBySlug(slug),
    fetchArticles(1, 4),
  ]);

  if (!data) notFound();

  const { article } = data;
  const relatedArticles: Article[] = (relatedData?.articles ?? []).filter(
    (a: Article) => a.slug !== slug,
  ).slice(0, 3);

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức", href: "/article" },
    { label: article.title },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-4 space-y-4">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Main content */}
          <article className="flex-1 min-w-0">
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
              {/* Thumbnail */}
              <div className="w-full aspect-video overflow-hidden">
                <Image
                  src={article.thumbnail.url}
                  alt={article.title}
                  width={1200}
                  height={630}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="p-5 md:p-8 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {new Date(article.publishedAt || article.createdAt).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaEye />
                    {article.viewCount} lượt xem
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                  {article.title}
                </h1>

                {/* Excerpt */}
                {article.excerpt && (
                  <p className="text-base text-gray-500 italic border-l-4 border-green-500 pl-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}

                {/* Content */}
                <div
                  className="prose prose-sm md:prose max-w-none text-gray-700 leading-relaxed
                    prose-headings:text-gray-800 prose-headings:font-semibold
                    prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-lg prose-img:shadow-sm
                    prose-strong:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </article>

          {/* Sidebar - related articles */}
          {relatedArticles.length > 0 && (
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-20 bg-white border border-gray-100 rounded-xl shadow-sm p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <FaNewspaper className="text-green-600" />
                  <h3 className="font-semibold text-gray-800">Bài viết liên quan</h3>
                </div>
                <div className="space-y-3">
                  {relatedArticles.map((a) => (
                    <Link
                      key={a._id}
                      href={`/article/${a.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={a.thumbnail.url}
                          alt={a.title}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-700 line-clamp-3 group-hover:text-green-700 transition-colors leading-snug">
                          {a.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(a.createdAt).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/article"
                  className="flex items-center justify-center gap-1 text-sm text-green-600 hover:text-green-800 font-medium pt-2 border-t border-gray-100"
                >
                  Xem tất cả tin tức <FaAngleRight className="text-xs" />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
