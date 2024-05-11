import { PaginationInfo } from './helper.model';

export interface CreateBrand {
  name: string;
  code: string;
}

export interface Brand extends CreateBrand {
  createdAt: string;
  fileId: string;
  fileName: string;
  fileType: boolean;
  fileUrl: string;
  id: string;
  updatedAt: string;
}

export interface BrandsList {
  data: Brand[];
  from: number;
  last_page: number;
  limit: number;
  page: number;
  to: number;
  total: number;
}

export interface BrandSelectList extends PaginationInfo {
  data: [
    {
      key: string;
      value: string;
    }
  ];
}
