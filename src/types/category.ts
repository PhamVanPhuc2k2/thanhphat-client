export type Category = {
  _id: string;
  name: string;
  slug: string;
  image: { url: string; public_id: string };
  parentId: string | null;
  hasChildren?: boolean;
  level?: number;
};
