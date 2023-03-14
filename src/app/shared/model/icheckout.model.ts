import { ICartItem } from './icart-item.model';

export interface ICheckout {
  address: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  zip: string;
  cardNumber: string;
  cartName: string;
  expirationDate: string;
  cvv: string;
  items: ICartItem[];
}
