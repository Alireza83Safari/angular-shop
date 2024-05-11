export interface Order {
  discountQuantity: number;
  discountType: number;
  discountValue: number;
  fileUrl: string;
  id: string;
  price: number;
  productItemId: string;
  productName: string;
  quantity: number;
  totalPrice: number;
}

export interface AdminOrder {
  createdAt: string;
  discountPrice: number;
  discountType: number;
  discountValue: number;
  orderId: string;
  paidAt: string;
  price: number;
  status: number;
  totalPrice: number;
  updatedAt: string;
  userId: string;
  username: string;
}
