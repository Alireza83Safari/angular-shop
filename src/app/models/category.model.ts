import { PaginationInfo } from './helper.model';

export interface CreateCategory {
  code: string;
  name: string;
}

export interface Category extends CreateCategory {
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface CategorySelectList {
  key: string;
  value: string;
}

export interface CategoriesList extends PaginationInfo {
  data: Category[];
}
