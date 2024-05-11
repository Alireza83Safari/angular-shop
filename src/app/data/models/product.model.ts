import { PaginationInfo } from './helper.model';

export interface CreateProduct {
  brandId: string;
  categoryId: string;
  code: string;
  description: string;
  name: string;
  shortDescription: string;
  topFeatures: [string];
}

export interface Product {
  brandId: string;
  brandName: string;
  categoryId: string;
  categoryName: string;
  code: string;
  discountQuantity: number;
  discountType: number;
  discountValue: number;
  fileUrl: string;
  id: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  rate: number;
}

export interface AdminProduct {
  brandId: string;
  brandName: string;
  categoryId: string;
  categoryName: string;
  code: string;
  description: string;
  id: string;
  name: string;
  shortDescription: string;
  topFeatures: [string];
}

export interface ProductsList extends PaginationInfo {
  data: Product[];
}

export interface SuggestionProduct {
  colorId: string;
  colors: [
    {
      colorHex: string;
      name: string;
      productItemId: string;
    }
  ];
  files: [
    {
      fileType: 0;
      fileUrl: string;
      id: string;
      originalName: string;
      uniqueFineName: string;
    }
  ];
  name: string;
  productId: string;
  productItemId: string;
  rate: 0;
  topFeatures: [string];
}

export interface SuggestionProductList extends PaginationInfo {
  data: SuggestionProduct[];
}
