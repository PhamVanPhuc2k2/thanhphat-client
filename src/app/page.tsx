import type { Metadata } from "next";
import { Menu } from "../components/menu/Menu";
import { News } from "../components/news/News";
import { CategoryProduct } from "../components/product/CategoryProduct";
import { NewProduct } from "../components/product/NewProduct";
import { RecentlyViewed } from "../components/product/RecentlyViewed";
import { ReviewProduct } from "../components/product/ReviewProduct";
import { Category } from "../types/category";
import {
  fetchBanners,
  fetchArticles,
  fetchCategories,
  fetchProducts,
} from "../lib/api";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thanhphat.com";

export const metadata: Metadata = {
  title: "Trang chủ - Dụng cụ & Thiết bị Công nghiệp Chính hãng",
  description:
    "Thành Phát - Mua dụng cụ điện, dụng cụ cầm tay, thiết bị công nghiệp, máy móc xây dựng chính hãng. Hàng ngàn sản phẩm, giá tốt nhất, giao hàng toàn quốc.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    url: siteUrl,
    title: "Thành Phát - Dụng cụ & Thiết bị Công nghiệp Chính hãng",
    description:
      "Mua dụng cụ điện, dụng cụ cầm tay, thiết bị công nghiệp, máy móc xây dựng chính hãng. Hàng ngàn sản phẩm, giá tốt nhất.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Thành Phát",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Cửa hàng chuyên cung cấp dụng cụ điện, dụng cụ cầm tay, thiết bị công nghiệp, máy móc xây dựng chính hãng.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Vietnamese",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Thành Phát",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/product?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function Home() {
  // Fetch base data in parallel
  const [categoriesData, newProductsData, articlesData, heroBanners] =
    await Promise.all([
      fetchCategories(),
      fetchProducts({ sort: "newest", limit: 10 }),
      fetchArticles(1, 4),
      fetchBanners("home_top"),
    ]);

  const allCategories: Category[] = categoriesData?.menu ?? [];
  const newProducts = newProductsData?.products ?? [];
  const articles = articlesData?.articles ?? [];

  // Pick up to 4 parent categories with children for CategoryProduct sections
  const parentCats = allCategories
    .filter((c) => c.parentId === null && c.hasChildren)
    .slice(0, 4);

  // Fetch products for each featured parent category in parallel
  const categoryProductsData = await Promise.all(
    parentCats.map((cat) =>
      fetchProducts({ category: cat.slug, limit: 8 }).then(
        (d) => d?.products ?? [],
      ),
    ),
  );

  // Build per-category sections data
  const categorySections = parentCats.map((cat, i) => ({
    category: cat,
    children: allCategories.filter((c) => c.parentId === cat._id),
    products: categoryProductsData[i],
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main className="bg-[#FFFFFF] pb-5">
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto pt-2 space-y-5">
          <h1 className="sr-only">
            Thành Phát - Cửa hàng dụng cụ & thiết bị công nghiệp chính hãng
          </h1>

          {/* Menu + Hero banner */}
          <section aria-label="Danh mục và banner">
            <div className="relative flex gap-2">
              <Menu categories={allCategories} banners={heroBanners} />
            </div>
          </section>

          {/* New products carousel */}
          {newProducts.length > 0 && (
            <section aria-label="Sản phẩm mới">
              <NewProduct products={newProducts} />
            </section>
          )}

          {/* Category product sections */}
          {categorySections.length > 0 && (
            <section aria-label="Sản phẩm theo danh mục" className="space-y-5">
              {categorySections.map(
                ({ category, children, products }) =>
                  products.length > 0 && (
                    <CategoryProduct
                      key={category._id}
                      category={category}
                      children={children}
                      products={products}
                    />
                  ),
              )}
            </section>
          )}

          {/* Recently viewed (client-side from localStorage) */}
          <section aria-label="Sản phẩm đã xem">
            <RecentlyViewed />
          </section>

          {/* Review section (static) */}
          <section aria-label="Review sản phẩm">
            <ReviewProduct />
          </section>

          {/* News */}
          {articles.length > 0 && (
            <section aria-label="Tin tức">
              <News articles={articles} />
            </section>
          )}
        </div>
      </main>
    </>
  );
}
