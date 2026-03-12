import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchPageBySlug } from "@/src/lib/api";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchPageBySlug(slug);
  if (!data) return { title: "Trang không tồn tại" };

  const { page } = data;
  return {
    title: page.seo?.title || page.title,
    description:
      page.seo?.description ||
      page.content?.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export default async function StaticPageDetail({ params }: Props) {
  const { slug } = await params;
  const data = await fetchPageBySlug(slug);
  if (!data) notFound();

  const { page } = data;

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: page.title },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto py-4 space-y-4">
        <Breadcrumb items={breadcrumbItems} />

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-10">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">
            {page.title}
          </h1>
          <div
            className="prose prose-sm md:prose max-w-none text-gray-700 leading-relaxed
              prose-headings:text-gray-800 prose-headings:font-semibold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-lg prose-img:shadow-sm
              prose-strong:text-gray-800
              prose-ul:list-disc prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </div>
    </div>
  );
}
