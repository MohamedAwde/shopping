import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../model/icart-item.model';
import { IProduct } from '../model/iproduct.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: ICartItem[] = [];
  productList = new BehaviorSubject<ICartItem[]>([]);

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: IProduct) {
    this.cartItems.push({ ...product, quantity: 1 });
    this.productList.next(this.cartItems);
  }

  getTotalPrice() {
    return this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
  }

  removeCartItem(item: ICartItem) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    this.productList.next(this.cartItems);
  }

  resetCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}
