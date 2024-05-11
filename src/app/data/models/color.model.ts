import { PaginationInfo } from './helper.model';

export interface CreateColor {
  code: string;
  colorHex: string;
  name: string;
}

export interface Color {
  createdAt: string;
  id: string;
  updatedAt: string;
}

export interface ColorSelectList {
  data: [
    {
      key: string;
      value: string;
    }
  ];
  from: number;
  last_page: number;
  limit: number;
  page: number;
  to: number;
  total: number;
}

export interface ColorsList extends PaginationInfo {
  data: Color[];
}
