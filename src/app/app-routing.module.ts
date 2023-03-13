import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/routes/AppRoutes';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: AppRoutes.home,
    loadChildren: () =>
      import('./pages/pages-routing.module').then((m) => m.PagesRoutingModule),
  },
  {
    path: AppRoutes.notfound,
    loadComponent: () =>
      import('./shared/components/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
