import React, { useEffect, useState } from "react";
import { Category } from "@/src/types/category";
import Image from "next/image";
import { FaCaretLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";

type MenuMobileProps = {
  showMenu: boolean;
  categories: Category[];
};

export const MenuMobile = ({ showMenu, categories }: MenuMobileProps) => {
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
  }, [showMenu, categories]);

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
                    src={cate.image.url}
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
                      src={subCate.image.url}
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
