import { PaginationInfo } from './helper.model';

export interface CreateUser {
  email: string;
  enabled: boolean;
  firstName: string;
  isSystem: boolean;
  lastName: string;
  mobile: string;
  roleId: string;
  username: string;
}

export interface User extends CreateUser {
  createdAt: string;
  id: string;
  roleName: string;
  updatedAt: string;
}

export interface UsersList extends PaginationInfo {
  data: User[];
}
