export interface ProfileOrders {
  code: string;
  createdAt: string;
  discountPrice: number;
  discountType: number;
  discountValue: number;
  fileUrls: string[];
  id: string;
  paidAt: string;
  price: number;
  status: number;
  totalPrice: number;
}

export interface Profile {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  mobile: string;
  roleName: string;
  username: string;
}
