import { PaginationInfo } from './helper.model';

export interface CreateProductItem {
  colorId: string;
  isMainItem: boolean;
  price: number;
  productId: string;
  quantity: number;
  status: number;
}

export interface ProductItem {
  brandFileUrl: string;
  brandId: string;
  brandName: string;
  categoryId: string;
  categoryName: string;
  code: string;
  id: string;
  name: string;
  rate: number;
}

export interface ProductItemSelectList extends PaginationInfo {
  color: string;
  colorId: string;
  id: string;
  price: number;
}
