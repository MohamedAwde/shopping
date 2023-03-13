import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/iproduct.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
})
export class ProductCardComponent implements OnInit {
  @Input('product') product!: IProduct;

  constructor() {}

  ngOnInit() {}
}
