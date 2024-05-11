import { PaginationInfo } from './helper.model';

export interface CreateComment {
  productId: string;
  rate: 0;
  strengthPoints: [string];
  text: string;
  weakPonits: [string];
}

export interface Comment {
  adminNote: string;
  commentStatus: number;
  createdAt: string;
  id: string;
  productName: string;
  updatedAt: string;
}

export interface CommentsList extends PaginationInfo {
  data: Comment[];
}
