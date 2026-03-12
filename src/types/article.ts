export type Article = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnail: { url: string; public_id: string };
  images?: { url: string; public_id: string }[];
  isPublished: boolean;
  publishedAt?: string;
  viewCount: number;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  createdAt: string;
};
