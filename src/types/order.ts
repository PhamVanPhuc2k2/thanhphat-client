export type Customer = {
  name: string;
  phone: string;
  email?: string;
  address: string;
  note?: string;
};

export type OrderItem = {
  productId: string;
  variantId: string;
  name: string;
  variantName: string;
  price: number;
  quantity: number;
  image?: string;
};

export type Order = {
  _id: string;
  orderCode: string;
  customer: Customer;
  items: OrderItem[];
  totalAmount: number;
  paymentMethod: "COD";
  status: "pending" | "confirmed" | "shipping" | "completed" | "cancelled";
  cancelReason?: string;
  createdAt: string;
  updatedAt: string;
};
