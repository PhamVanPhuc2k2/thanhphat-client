import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/common/header/Header";
import { Footer } from "../components/common/footer/Footer";
import { ClientOverlayComponents } from "./ClientOverlayComponents";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thành Phát - Dụng cụ & Thiết bị",
  description: "Cửa hàng dụng cụ, thiết bị công nghiệp và gia dụng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <ClientOverlayComponents />
        </CartProvider>
      </body>
    </html>
  );
}
