import React, { useEffect, useState } from "react";
import { Category } from "@/src/types/category";
import Image from "next/image";
import { FaCaretLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

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

type MenuMobileProps = {
  showMenu: boolean;
};

export const MenuMobile = ({ showMenu }: MenuMobileProps) => {
  const router = useRouter();

  const [activeCate, setActiveCate] = useState<string | null>(null);

  useEffect(() => {
    if (showMenu) {
      const firstParent = categories.find((cate) => cate.parentId === null);
      if (firstParent) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveCate(firstParent._id);
      }
    }
  }, [showMenu]);

  return (
    <div
      className={`bg-[#F2F2F3] fixed inset-0 z-40 md:hidden transition-transform duration-500 ${
        showMenu ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-2">
        <div
          className="w-1/4 h-screen border-r border-gray-200
                overflow-y-auto bg-white shadow-lg pb-56 scrollbar-hide"
        >
          <div className="flex flex-col">
            {categories
              .filter((cate) => cate.parentId === null)
              .map((cate) => (
                <button
                  type="button"
                  onClick={() => {
                    setActiveCate(cate._id);
                  }}
                  key={cate._id}
                  className="relative flex flex-col items-center border border-gray-200 p-2"
                >
                  <Image
                    src={cate.image}
                    alt="ảnh danh mục"
                    width={1200}
                    height={900}
                    className="h-10 w-10 object-cover"
                  />
                  <p className="text-sm font-semibold text-black">
                    {cate.name}
                  </p>
                  <FaCaretLeft
                    className={`absolute text-2xl text-gray-300 top-1/3 -right-2 ${
                      activeCate === cate._id ? "flex" : "hidden"
                    }`}
                  />
                </button>
              ))}
          </div>
        </div>
        <div className="w-3/4 p-2 space-y-2">
          <div className="flex p-2 bg-white items-center justify-between rounded-lg">
            <h1 className="text-lg font-bold text-black text-center line-clamp-2">
              {categories.find((cate) => cate._id === activeCate)?.name}
            </h1>
            <button
              type="button"
              onClick={() => {
                router.push(
                  `/product?cate=${
                    categories.find((cate) => cate._id === activeCate)?.slug
                  }`
                );
              }}
              className="flex items-center gap-2 shrink-0"
            >
              <p className="text-sm text-blue-500">Xem tất cả</p>
              <FaAngleRight className="text-blue-500" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeCate &&
              categories
                .filter((cate) => cate.parentId === activeCate)
                .map((subCate) => (
                  <button
                    type="button"
                    onClick={() => {
                      router.push(`/product?cate=${subCate.slug}`);
                    }}
                    key={subCate._id}
                    className="border border-gray-200 rounded-lg bg-white p-2 flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <Image
                      src={subCate.image}
                      alt="ảnh danh mục"
                      width={1200}
                      height={900}
                      className="h-10 w-10 object-cover"
                    />
                    <p className="text-xs tracking-tighter"> {subCate.name}</p>
                  </button>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
