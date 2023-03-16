import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/model/iproduct.model';
import { NetworkErrorComponent } from 'src/app/shared/components/network-error/network-error.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    ProductCardComponent,
    SpinnerComponent,
    CommonModule,
    NetworkErrorComponent,
    FormsModule,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  isError: boolean = false;
  isLoading: boolean = true;
  products!: IProduct[];
  filterProducts!: IProduct[];
  subscription: Subscription[] = [];

  selectedCategory = 'all';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.isLoading = true;
    this.isError = false;
    const sub = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filterProducts = products;
        this.isLoading = false;
        this.isError = false;
      },
      error: () => {
        this.isError = true;
        this.isLoading = false;
      },
    });
    this.subscription.push(sub);
  }

  handleCategoryChange() {
    if (this.selectedCategory === 'all') {
      this.filterProducts = this.products;
    } else {
      this.filterProducts = this.products.filter((product) => {
        return product.type === this.selectedCategory;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
