import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ICartItem } from 'src/app/shared/model/icart-item.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class CartComponent implements OnInit {
  products!: ICartItem[];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getProducts().subscribe((products) => {
      this.products = products;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  handleRemoveItem(product: ICartItem) {
    this.cartService.removeCartItem(product);
  }
}
