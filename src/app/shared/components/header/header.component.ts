import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  productsCount = 0;
  sub!: Subscription;

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.sub = this.cartService.productList.subscribe((products) => {
      this.productsCount = products.length;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
