import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thanhphat.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/checkout", "/order-success", "/order-tracking"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
