export type PageContent = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  images?: { url: string; public_id: string }[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  createdAt: string;
};
