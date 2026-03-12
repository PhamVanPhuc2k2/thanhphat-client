export type Brand = {
  _id: string;
  name: string;
  slug: string;
  logo?: { url: string; public_id: string };
  isActive?: boolean;
};
