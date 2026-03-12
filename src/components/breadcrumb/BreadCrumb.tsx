import { BreadcrumbItem } from "@/src/types/breadcrumb";
import Link from "next/link";
import React from "react";

type Props = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: Props) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-black">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-500 font-medium">{item.label}</span>
              )}
              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
