import { IProduct } from './iproduct.model';

export interface ICartItem extends IProduct {
  quantity: number;
}
