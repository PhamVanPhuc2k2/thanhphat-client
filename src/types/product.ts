export type ImageType = {
  url: string;
  public_id: string;
};

export type Spec = {
  key: string;
  value: string;
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  categoryId?: { _id: string; name: string; slug: string };
  brandId?: { _id: string; name: string; slug: string; logo?: ImageType };
  description: string;
  images: ImageType[];
  video?: ImageType;
  specs?: Spec[];
  isActive: boolean;
  seo?: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: ImageType;
  };
  // Attached from variant pricing
  price: number;
  oldPrice: number;
  discountPercent: number;
  stock: number;
  createdAt?: string;
};

export type Variant = {
  _id: string;
  name: string;
  productId: string;
  sku: string;
  price: number;
  discountPrice: number;
  percentDiscount: number;
  stock: number;
  images: ImageType[];
  isActive: boolean;
};

export type ProductDetailResponse = {
  product: Product;
  variants: Variant[];
  relatedProducts: Product[];
};

export type ProductListResponse = {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
