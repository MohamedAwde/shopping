import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/routes/AppRoutes';

const routes: Routes = [
  {
    path: AppRoutes.home,
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: AppRoutes.cart,
    loadComponent: () =>
      import('./cart/cart.component').then((c) => c.CartComponent),
  },
  {
    path: AppRoutes.checkout,
    loadComponent: () =>
      import('./checkout/checkout.component').then((c) => c.CheckoutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
