export interface CreateAddress {
  address: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  phoneNumber: string;
  plaque: number;
  postalCode: string;
}

export interface Address extends CreateAddress {
  createdAt: string;
  id: string;
  updatedAt: string;
}
