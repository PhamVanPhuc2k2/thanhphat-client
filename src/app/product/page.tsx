import Banner from "@/src/components/banner/Banner";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";
import { ProductCard } from "@/src/components/product/ProductCard";
import { fetchBanners, fetchBrands, fetchProducts } from "@/src/lib/api";
import { BrandFilter } from "./BrandFilter";
import { SortFilter } from "./SortFilter";
import { Pagination } from "./Pagination";

type SearchParams = {
  cate?: string;
  brand?: string;
  sort?: string;
  page?: string;
  search?: string;
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { cate, brand, sort = "newest", page = "1", search } = await searchParams;

  const [productsData, brandsData, banners] = await Promise.all([
    fetchProducts({
      category: cate,
      brand,
      sort,
      search,
      page: Number(page),
      limit: 20,
    }),
    fetchBrands(),
    fetchBanners("category"),
  ]);

  const { products, pagination } = productsData;
  const brands = brandsData.brands ?? [];

  const pageTitle = search
    ? `Kết quả cho: "${search}"`
    : cate
    ? `Sản phẩm: ${cate}`
    : "Tất cả sản phẩm";

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/product" },
    ...(search
      ? [{ label: `Tìm kiếm: ${search}` }]
      : cate
      ? [{ label: cate }]
      : [{ label: "Tất cả sản phẩm" }]),
  ];

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-5 py-2">
      <Breadcrumb items={breadcrumbItems} />

      {banners.length > 0 && <Banner data={banners} />}

      <BrandFilter brands={brands} />

      {/* Sort bar */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
        <h2 className="text-xl font-bold text-black">
          {pageTitle}
          {pagination.total > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({pagination.total} sản phẩm)
            </span>
          )}
        </h2>
        <SortFilter />
      </div>

      {/* Product grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-400 text-lg">Không tìm thấy sản phẩm nào</p>
          <p className="text-gray-300 text-sm mt-1">
            Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
          </p>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        totalPages={pagination.totalPages}
        currentPage={pagination.page}
      />
    </div>
  );
}
