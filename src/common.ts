export interface Category {
  id: number;
  name: string;
  is_active: Boolean;
  created_at: string;
}

export interface Genre {
  id: number;
  name: string;
  is_active: Boolean;
  categories: Category[];
  created_at: string;
}