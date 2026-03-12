const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://localhost:3001";

// ===== Products =====
export async function fetchProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  brandId?: string;
  sort?: string;
}) {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.search) searchParams.set("search", params.search);
  if (params?.categoryId) searchParams.set("categoryId", params.categoryId);
  if (params?.brandId) searchParams.set("brandId", params.brandId);
  if (params?.sort) searchParams.set("sort", params.sort);

  const res = await fetch(`${API_URL}/api/product/list?${searchParams}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return { products: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
  return res.json();
}

export async function fetchProductBySlug(slug: string) {
  const res = await fetch(`${API_URL}/api/product/detail/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

export async function searchProducts(q: string, page = 1, limit = 20) {
  const searchParams = new URLSearchParams({ q, page: String(page), limit: String(limit) });
  const res = await fetch(`${API_URL}/api/product/search?${searchParams}`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) return { products: [], pagination: { page: 1, limit: 20, total: 0, totalPages: 0 } };
  return res.json();
}

// ===== Categories =====
export async function fetchCategories() {
  const res = await fetch(`${API_URL}/api/category/menu`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchAllCategories() {
  const res = await fetch(`${API_URL}/api/category/all`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];
  return res.json();
}

// ===== Brands =====
export async function fetchBrands() {
  const res = await fetch(`${API_URL}/api/brand/list`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return { brands: [] };
  return res.json();
}

// ===== Banners =====
export async function fetchBanners(position?: string) {
  const params = new URLSearchParams();
  if (position) params.set("position", position);
  params.set("isActive", "true");
  const res = await fetch(`${API_URL}/api/banner/list?${params}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
}

// ===== Articles =====
export async function fetchArticles(page = 1, limit = 10) {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  const res = await fetch(`${API_URL}/api/article/list?${params}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return { articles: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } };
  return res.json();
}

export async function fetchArticleById(id: string) {
  const res = await fetch(`${API_URL}/api/article/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  return res.json();
}

// ===== Pages =====
export async function fetchPages() {
  const res = await fetch(`${API_URL}/api/page/list`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return { pages: [] };
  return res.json();
}

export async function fetchPageById(id: string) {
  const res = await fetch(`${API_URL}/api/page/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;
  return res.json();
}

// ===== Orders =====
export async function createOrder(data: {
  customer: { name: string; phone: string; email?: string; address: string; note?: string };
  items: {
    productId: string;
    variantId: string;
    name: string;
    variantName: string;
    price: number;
    quantity: number;
    image?: string;
  }[];
}) {
  const res = await fetch(`${API_URL}/api/order/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Đặt hàng thất bại" }));
    throw new Error(err.message || "Đặt hàng thất bại");
  }
  return res.json();
}

export async function trackOrder(orderCode: string, phone: string) {
  const params = new URLSearchParams({ orderCode, phone });
  const res = await fetch(`${API_URL}/api/order/track?${params}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: "Không tìm thấy đơn hàng" }));
    throw new Error(err.message || "Không tìm thấy đơn hàng");
  }
  return res.json();
}
