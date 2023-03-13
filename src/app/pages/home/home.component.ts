import { CommonModule, NgIf } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/model/iproduct.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ProductCardComponent, SpinnerComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  products$!: Observable<IProduct[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }
}
