export interface Product {
  product_id: string;
  product_name: string;
  product_price: number;
  product_image: string;
  product_quantity: number;
  product_description?: string;
  product_category: string;
  product_stock?: number;
  product_rating?: number;
  product_review?: string;
  product_sold?: number;
  product_discount?: number;
  product_wishlist?: number;
  product_date_added?: string;
  product_date_updated?: string;
  product_views?: number;
  product_status?: string;
}

type CategoryType = {
  id: string;
  name: string;
  products: Product[];
  status?: string;
};
export interface Category {
  category_id?: string;
  category_name?: string;
  category_types?: CategoryType[];

  // category_description?: string;
  // category_date_added?: string;
  // category_date_updated?: string;
  // category_status?: string;
}
