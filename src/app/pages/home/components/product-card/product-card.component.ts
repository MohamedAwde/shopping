import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from 'src/app/shared/model/iproduct.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [CurrencyPipe, NgIf, RouterLink],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product!: IProduct;
  isAddedToCart = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems.map((p) => {
      if (p.id === this.product.id) {
        this.isAddedToCart = true;
      }
    });
  }

  handleAddToCart() {
    this.cartService.addToCart(this.product);
    this.isAddedToCart = true;
  }
}
