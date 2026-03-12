import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/common/header/Header";
import { Footer } from "../components/common/footer/Footer";
import { ClientOverlayComponents } from "./ClientOverlayComponents";
import { CartProvider } from "../context/CartContext";
import { fetchCategories } from "../lib/api";
import { Category } from "../types/category";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thanhphat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thành Phát - Dụng cụ & Thiết bị Công nghiệp",
    template: "%s | Thành Phát",
  },
  description:
    "Thành Phát - Cửa hàng chuyên cung cấp dụng cụ điện, dụng cụ cầm tay, thiết bị công nghiệp, máy móc xây dựng, thiết bị an toàn lao động. Giá tốt, chất lượng cao, giao hàng nhanh toàn quốc.",
  keywords: [
    "dụng cụ điện",
    "dụng cụ cầm tay",
    "thiết bị công nghiệp",
    "máy móc xây dựng",
    "thiết bị an toàn",
    "vật tư cơ khí",
    "máy khoan",
    "máy mài",
    "thiết bị đo lường",
    "Thành Phát",
    "mua dụng cụ online",
  ],
  authors: [{ name: "Thành Phát" }],
  creator: "Thành Phát",
  publisher: "Thành Phát",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "Thành Phát",
    title: "Thành Phát - Dụng cụ & Thiết bị Công nghiệp",
    description:
      "Cửa hàng chuyên cung cấp dụng cụ điện, thiết bị công nghiệp, máy móc xây dựng. Giá tốt, giao hàng nhanh toàn quốc.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thành Phát - Dụng cụ & Thiết bị Công nghiệp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thành Phát - Dụng cụ & Thiết bị Công nghiệp",
    description:
      "Cửa hàng chuyên cung cấp dụng cụ điện, thiết bị công nghiệp, máy móc xây dựng. Giá tốt, giao hàng nhanh toàn quốc.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoriesData = await fetchCategories();
  const categories: Category[] = categoriesData?.menu ?? [];

  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header categories={categories} />
          {children}
          <Footer />
          <ClientOverlayComponents categories={categories} />
        </CartProvider>
      </body>
    </html>
  );
}
