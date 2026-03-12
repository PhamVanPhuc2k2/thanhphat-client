import Banner from "@/src/components/banner/Banner";
import { Breadcrumb } from "@/src/components/breadcrumb/BreadCrumb";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { TbShoppingCartStar } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMdStarOutline } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { GoSortAsc, GoSortDesc } from "react-icons/go";
import { ProductCard } from "@/src/components/product/ProductCard";
import { Product } from "@/src/types/product";
import { FaAngleDown } from "react-icons/fa6";
import { BrandFilter } from "./BrandFilter";

const data = [
  {
    _id: "b_cate_1",
    title: "Khuyến mãi dụng cụ cầm tay",
    alt: "Khuyến mãi dụng cụ cầm tay",
    image: "https://picsum.photos/seed/cate1/1200/400",
    link: "/product?cate=dung-cu-cam-tay",
    priority: 1,
    isActive: true,
  },
  {
    _id: "b_cate_2",
    title: "Máy khoan chính hãng",
    alt: "Máy khoan chính hãng",
    image: "https://picsum.photos/seed/cate2/1200/400",
    link: "/product?cate=may-khoan",
    priority: 2,
    isActive: true,
  },
];

const brands = [
  {
    _id: "brand_home_1",
    name: "Electrolux",
    slug: "electrolux",
    logo: "https://picsum.photos/seed/electrolux/200/200",
    isActive: true,
  },
  {
    _id: "brand_home_2",
    name: "Panasonic",
    slug: "panasonic",
    logo: "https://picsum.photos/seed/panasonic/200/200",
    isActive: true,
  },
  {
    _id: "brand_home_3",
    name: "Philips",
    slug: "philips",
    logo: "https://picsum.photos/seed/philips/200/200",
    isActive: true,
  },
  {
    _id: "brand_home_4",
    name: "Daikin",
    slug: "daikin",
    logo: "https://picsum.photos/seed/daikin/200/200",
    isActive: true,
  },
  {
    _id: "brand_home_5",
    name: "Sharp",
    slug: "sharp",
    logo: "https://picsum.photos/seed/sharp/200/200",
    isActive: true,
  },
];

const products: Product[] = [
  {
    _id: "p01",
    name: "Nồi cơm điện Sharp 1.8L",
    slug: "noi-com-dien-sharp-18l",
    category: "do-gia-dung",
    oldPrice: 1700000,
    price: 1450000,
    discountPercent: 15,
    stock: 35,
    brand: "Sharp",
    image: "https://picsum.photos/200",
    description: "Nồi cơm điện dung tích 1.8L, phù hợp gia đình 4–6 người",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p02",
    name: "Ấm đun nước siêu tốc Philips 1.7L",
    slug: "am-sieu-toc-philips-17l",
    category: "do-gia-dung",
    oldPrice: 1050000,
    price: 890000,
    discountPercent: 15,
    stock: 50,
    brand: "Philips",
    image: "https://picsum.photos/200",
    description: "Ấm siêu tốc công suất 2200W, đun sôi nhanh",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p03",
    name: "Quạt đứng Panasonic F-308NHB",
    slug: "quat-dung-panasonic-f308",
    category: "do-gia-dung",
    oldPrice: 1850000,
    price: 1650000,
    discountPercent: 11,
    stock: 20,
    brand: "Panasonic",
    image: "https://picsum.photos/200",
    description: "Quạt đứng 3 tốc độ gió, vận hành êm ái",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p04",
    name: "Bếp gas đôi Rinnai RV-7Slim",
    slug: "bep-gas-doi-rinnai-rv7",
    category: "do-gia-dung",
    oldPrice: 2450000,
    price: 2150000,
    discountPercent: 12,
    stock: 15,
    brand: "Rinnai",
    image: "https://picsum.photos/200",
    description: "Bếp gas đôi mặt kính chịu lực, tiết kiệm gas",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p05",
    name: "Máy khoan cầm tay Bosch GSB 550",
    slug: "may-khoan-bosch-gsb-550",
    category: "dung-cu-co-khi",
    oldPrice: 1500000,
    price: 1250000,
    discountPercent: 17,
    stock: 40,
    brand: "Bosch",
    image: "https://picsum.photos/200",
    description: "Máy khoan động lực 550W, dùng cho gia đình và công trình nhỏ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p06",
    name: "Máy mài góc Makita 9553B",
    slug: "may-mai-goc-makita-9553b",
    category: "dung-cu-co-khi",
    oldPrice: 1150000,
    price: 980000,
    discountPercent: 15,
    stock: 30,
    brand: "Makita",
    image: "https://picsum.photos/200",
    description: "Máy mài góc công suất 710W, bền bỉ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p07",
    name: "Bộ cờ lê – mỏ lết đa năng 12 chi tiết",
    slug: "bo-co-le-mo-let-12",
    category: "dung-cu-co-khi",
    oldPrice: 780000,
    price: 650000,
    discountPercent: 17,
    stock: 60,
    brand: "Tolsen",
    image: "https://picsum.photos/200",
    description: "Bộ dụng cụ cơ khí đa năng cho sửa chữa gia đình",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p08",
    name: "Máy cắt sắt Total TS920405",
    slug: "may-cat-sat-total-ts920405",
    category: "dung-cu-co-khi",
    oldPrice: 2800000,
    price: 2450000,
    discountPercent: 13,
    stock: 10,
    brand: "Total",
    image: "https://picsum.photos/200",
    description: "Máy cắt sắt công suất lớn, dùng trong xưởng cơ khí",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p09",
    name: "Nồi chiên không dầu Lock&Lock 5.2L",
    slug: "noi-chien-khong-dau-locklock-52l",
    category: "do-gia-dung",
    oldPrice: 3200000,
    price: 2850000,
    discountPercent: 11,
    stock: 25,
    brand: "Lock&Lock",
    image: "https://picsum.photos/200",
    description: "Nồi chiên không dầu dung tích lớn, ít dầu mỡ",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p10",
    name: "Máy hút bụi Electrolux Z1220",
    slug: "may-hut-bui-electrolux-z1220",
    category: "do-gia-dung",
    oldPrice: 2250000,
    price: 1950000,
    discountPercent: 13,
    stock: 18,
    brand: "Electrolux",
    image: "https://picsum.photos/200",
    description: "Máy hút bụi nhỏ gọn, lực hút mạnh",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p11",
    name: "Máy hàn que Hồng Ký HK200A",
    slug: "may-han-hong-ky-hk200a",
    category: "dung-cu-co-khi",
    oldPrice: 3700000,
    price: 3250000,
    discountPercent: 12,
    stock: 12,
    brand: "Hồng Ký",
    image: "https://picsum.photos/200",
    description: "Máy hàn que công suất 200A, dùng cho thợ chuyên nghiệp",
    isActive: true,
    sold: 10,
  },
  {
    _id: "p12",
    name: "Bộ tua vít đa năng 32 đầu",
    slug: "bo-tua-vit-da-nang-32",
    category: "dung-cu-co-khi",
    oldPrice: 390000,
    price: 320000,
    discountPercent: 18,
    stock: 80,
    brand: "Stanley",
    image: "https://picsum.photos/200",
    description: "Bộ tua vít đa năng 32 đầu, tiện lợi sửa chữa",
    isActive: true,
    sold: 10,
  },
];

type SearchParams = {
  cate?: string;
  brand?: string;
  order?: string;
  dir?: "asc" | "desc";
  page?: string;
  limit?: number;
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const cate = resolvedSearchParams.cate;

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Sản phẩm", href: "/product" },
    { label: cate ?? "Tất cả sản phẩm" },
  ];

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-5 py-2">
      <Breadcrumb items={breadcrumbItems} />
      <Banner data={data} />
      <BrandFilter brands={brands} />
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-black">Chọn theo nhu cầu</h2>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="min-w-md flex items-center gap-2">
            <button className="p-2 bg-gray-200 rounded-lg flex flex-col items-center space-y-2">
              <Image
                src="https://picsum.photos/seed/philips/200/200"
                alt="Nhu cầu"
                width={1200}
                height={900}
                className="w-15 h-15 object-cover rounded-lg"
              />
              <p className="text-sm text-black font-semibold">Khoan tường</p>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-black">Chọn theo tiêu chí</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg cursor-pointer">
            <FaTruckFast className="text-black" />
            <p className="text-sm text-black font-medium">Săn hàng</p>
          </button>
          <button className="p-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg cursor-pointer">
            <TbShoppingCartStar className="text-black" />
            <p className="text-sm text-black font-medium">Hàng mới về</p>
          </button>
          <button className="p-2 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg cursor-pointer">
            <GiTakeMyMoney className="text-black" />
            <p className="text-sm text-black font-medium">Xem theo giá</p>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="lg:flex lg:flex-row lg:justify-between items-center space-y-2">
        <h2 className="text-xl font-bold text-black">Sắp xếp</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button className="p-2 flex border border-gray-200 items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full cursor-pointer">
            <IoMdStarOutline className="text-black" />
            <p className="text-sm text-black font-medium">Phổ biến</p>
          </button>
          <button className="p-2 flex border border-gray-200 items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full cursor-pointer">
            <CiDiscount1 className="text-black" />
            <p className="text-sm text-black font-medium">Khuyến mãi hot</p>
          </button>
          <button className="p-2 flex border border-gray-200 items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full cursor-pointer">
            <GoSortAsc className="text-black" />
            <p className="text-sm text-black font-medium">Giá Thấp - Cao</p>
          </button>
          <button className="p-2 flex border border-gray-200 items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-full cursor-pointer">
            <GoSortDesc className="text-black" />
            <p className="text-sm text-black font-medium">Giá Cao - Thấp</p>
          </button>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {products.map((product) => (
          <div className="" key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex items-center p-5 justify-center">
        <button className="p-2 rounded-lg bg-blue-100 flex items-center gap-2 cursor-pointer hover:bg-blue-200 transition-colors duration-300">
          <p className="text-sm text-blue-500 font-medium">
            Xem thêm 900 sản phẩm
          </p>
          <FaAngleDown className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}
