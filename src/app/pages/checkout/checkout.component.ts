import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICartItem } from 'src/app/shared/model/icart-item.model';
import { ICheckout } from 'src/app/shared/model/icheckout.model';
import { AppRoutes } from 'src/app/shared/routes/AppRoutes';
import { CartService } from 'src/app/shared/services/cart.service';

interface ICheckoutForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  address: FormControl<string | null>;
  country: FormControl<string | null>;
  state: FormControl<string | null>;
  zip: FormControl<string | null>;
  cartName: FormControl<string | null>;
  cardNumber: FormControl<string | null>;
  expirationDate: FormControl<string | null>;
  cvv: FormControl<string | null>;
  items: FormControl<ICartItem[] | null>;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  totalPrice: number = 0;
  cartItems: ICartItem[] = [];
  subscription!: Subscription;
  checkoutForm!: FormGroup<ICheckoutForm>;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.cartService.getProducts().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });

    this.checkoutForm = new FormGroup<ICheckoutForm>({
      address: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      zip: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required]),
      cartName: new FormControl(null, Validators.required),
      expirationDate: new FormControl(null, Validators.required),
      cvv: new FormControl(null, Validators.required),
      items: new FormControl(null),
    });
  }

  get fromControl(): ICheckoutForm {
    return this.checkoutForm.controls;
  }

  handleCheckout() {
    this.checkoutForm.patchValue({
      items: this.cartService.cartItems,
    });

    const values = this.checkoutForm.value;

    const order: ICheckout = {
      address: values.address || '',
      cardNumber: values.cardNumber || '',
      cartName: values.cartName || '',
      country: values.country || '',
      cvv: values.cvv || '',
      email: values.email || '',
      expirationDate: values.expirationDate || '',
      firstName: values.firstName || '',
      items: values.items || [],
      lastName: values.lastName || '',
      state: values.state || '',
      zip: values.zip || '',
    };

    this.cartService.resetCart();

    this.router.navigate([AppRoutes.orderPlaced]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
