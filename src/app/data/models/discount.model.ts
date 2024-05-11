import { PaginationInfo } from './helper.model';

export interface CreateDiscount {
  code: string;
  expiresIn: string;
  productItemId: string;
  quantity: number;
  relatedUserId: string;
  type: number;
  value: number;
}

export interface AdminDiscount extends CreateDiscount {
  createdAt: string;
  creatorUserId: string;
  creatorUsername: string;
  id: string;
  productName: string;
  relatedUserUsername: string;
  typeName: string;
  updatedAt: string;
}

export interface AdminDiscountsList extends PaginationInfo {
  data: AdminDiscount[];
}

export interface Discount {
  code: string;
  createdAt: string;
  expiresIn: string;
  id: string;
  quantity: number;
  type: number;
  typeName: string;
  updatedAt: string;
  value: number;
}
