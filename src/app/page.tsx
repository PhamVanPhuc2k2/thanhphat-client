import { Menu } from "../components/menu/Menu";
import { News } from "../components/news/News";
import { CategoryProduct } from "../components/product/CategoryProduct";
import { NewProduct } from "../components/product/NewProduct";
import { RecentlyViewed } from "../components/product/RecentlyViewed";
import { ReviewProduct } from "../components/product/ReviewProduct";
import { Category } from "../types/category";
import { Product } from "../types/product";

const categories: Category[] = [
  {
    _id: "c1",
    image: "https://picsum.photos/200",
    name: "Dụng cụ điện",
    slug: "dung-cu-dien",
    parentId: null,
  },
  {
    _id: "c2",
    image: "https://picsum.photos/200",
    name: "Dụng cụ cầm tay",
    slug: "dung-cu-cam-tay",
    parentId: null,
  },
  {
    _id: "c3",
    image: "https://picsum.photos/200",
    name: "Thiết bị công nghiệp",
    slug: "thiet-bi-cong-nghiep",
    parentId: null,
  },
  {
    _id: "c4",
    image: "https://picsum.photos/200",
    name: "Máy móc xây dựng",
    slug: "may-moc-xay-dung",
    parentId: null,
  },
  {
    _id: "c5",
    image: "https://picsum.photos/200",
    name: "Thiết bị điện",
    slug: "thiet-bi-dien",
    parentId: null,
  },
  {
    _id: "c6",
    image: "https://picsum.photos/200",
    name: "Phụ kiện máy",
    slug: "phu-kien-may",
    parentId: null,
  },
  {
    _id: "c7",
    image: "https://picsum.photos/200",
    name: "Thiết bị đo lường",
    slug: "thiet-bi-do-luong",
    parentId: null,
  },
  {
    _id: "c8",
    image: "https://picsum.photos/200",
    name: "Vật tư cơ khí",
    slug: "vat-tu-co-khi",
    parentId: null,
  },
  {
    _id: "c9",
    image: "https://picsum.photos/200",
    name: "Thiết bị an toàn",
    slug: "thiet-bi-an-toan",
    parentId: null,
  },
  {
    _id: "c10",
    image: "https://picsum.photos/200",
    name: "Thiết bị gia dụng",
    slug: "thiet-bi-gia-dung",
    parentId: null,
  },

  {
    _id: "c1-1",
    image: "https://picsum.photos/200",
    name: "Máy khoan",
    slug: "may-khoan",
    parentId: "c1",
  },
  {
    _id: "c1-2",
    image: "https://picsum.photos/200",
    name: "Máy mài",
    slug: "may-mai",
    parentId: "c1",
  },
  {
    _id: "c1-3",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-4",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-5",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-6",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-7",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-8",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-9",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },
  {
    _id: "c1-10",
    image: "https://picsum.photos/200",
    name: "Máy cắt",
    slug: "may-cat",
    parentId: "c1",
  },

  {
    _id: "c1-1-1",
    image: "https://picsum.photos/200",
    name: "Khoan bê tông",
    slug: "khoan-be-tong",
    parentId: "c1-1",
  },
  {
    _id: "c1-1-2",
    image: "https://picsum.photos/200",
    name: "Khoan pin",
    slug: "khoan-pin",
    parentId: "c1-1",
  },

  {
    _id: "c2-1",
    image: "https://picsum.photos/200",
    name: "Búa",
    slug: "bua",
    parentId: "c2",
  },
  {
    _id: "c2-2",
    image: "https://picsum.photos/200",
    name: "Cờ lê - mỏ lết",
    slug: "co-le-mo-let",
    parentId: "c2",
  },
  {
    _id: "c2-3",
    image: "https://picsum.photos/200",
    name: "Tua vít",
    slug: "tua-vit",
    parentId: "c2",
  },

  {
    _id: "c3-1",
    image: "https://picsum.photos/200",
    name: "Máy nén khí",
    slug: "may-nen-khi",
    parentId: "c3",
  },
  {
    _id: "c3-2",
    image: "https://picsum.photos/200",
    name: "Máy phát điện",
    slug: "may-phat-dien",
    parentId: "c3",
  },

  {
    _id: "c4-1",
    name: "Máy trộn bê tông",
    image: "https://picsum.photos/200",
    slug: "may-tron-be-tong",
    parentId: "c4",
  },
  {
    _id: "c4-2",
    image: "https://picsum.photos/200",
    name: "Máy đầm",
    slug: "may-dam",
    parentId: "c4",
  },

  {
    _id: "c5-1",
    image: "https://picsum.photos/200",
    name: "Ổ cắm - công tắc",
    slug: "o-cam-cong-tac",
    parentId: "c5",
  },
  {
    _id: "c5-2",
    image: "https://picsum.photos/200",
    name: "Dây điện",
    slug: "day-dien",
    parentId: "c5",
  },

  {
    _id: "c6-1",
    image: "https://picsum.photos/200",
    name: "Mũi khoan",
    slug: "mui-khoan",
    parentId: "c6",
  },
  {
    _id: "c6-2",
    image: "https://picsum.photos/200",
    name: "Đá cắt",
    slug: "da-cat",
    parentId: "c6",
  },

  {
    _id: "c7-1",
    image: "https://picsum.photos/200",
    name: "Thước đo",
    slug: "thuoc-do",
    parentId: "c7",
  },
  {
    _id: "c7-2",
    image: "https://picsum.photos/200",
    name: "Máy đo điện",
    slug: "may-do-dien",
    parentId: "c7",
  },

  {
    _id: "c8-1",
    image: "https://picsum.photos/200",
    name: "Bulông - ốc vít",
    slug: "bu-long-oc-vit",
    parentId: "c8",
  },
  {
    _id: "c8-2",
    image: "https://picsum.photos/200",
    name: "Thanh ren",
    slug: "thanh-ren",
    parentId: "c8",
  },

  {
    _id: "c9-1",
    image: "https://picsum.photos/200",
    name: "Mũ bảo hộ",
    slug: "mu-bao-ho",
    parentId: "c9",
  },
  {
    _id: "c9-2",
    image: "https://picsum.photos/200",
    name: "Găng tay bảo hộ",
    slug: "gang-tay-bao-ho",
    parentId: "c9",
  },

  {
    _id: "c10-1",
    image: "https://picsum.photos/200",
    name: "Quạt điện",
    slug: "quat-dien",
    parentId: "c10",
  },
  {
    _id: "c10-2",
    image: "https://picsum.photos/200",
    name: "Nồi cơm điện",
    slug: "noi-com-dien",
    parentId: "c10",
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

async function getBanners() {
  try {
    const response = await fetch(
      `${process.env.API_URL}/api/banner/list?isActive=true&&position=home_top`,
      {
        next: { revalidate: 60 },
      },
    );
    if (!response.ok) {
      throw new Error("Lỗi khi fetch banners");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const banners = await getBanners();
  return (
    <div className="bg-[#FFFFFF] pb-5">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto pt-2 space-y-5">
        <div className="relative flex gap-2">
          <Menu categories={categories} banners={banners} />
        </div>
        <NewProduct products={products} />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <RecentlyViewed />
        <ReviewProduct />
        <News />
      </div>
    </div>
  );
}
