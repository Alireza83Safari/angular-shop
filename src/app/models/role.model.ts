import { PaginationInfo } from './helper.model';

export interface CreateRole {
  code: string;
  isSystem: true;
  name: string;
  permissions: string[];
}

export interface Role {
  code: string;
  createdAt: string;
  id: string;
  isSystem: boolean;
  name: string;
  permissions: string[];
  updatedAt: string;
}

export interface RolesList extends PaginationInfo {
  data: Role[];
}
