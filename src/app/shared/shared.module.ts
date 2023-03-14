import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NetworkErrorComponent } from './components/network-error/network-error.component';

@NgModule({
  imports: [
    CommonModule,
    SpinnerComponent,
    RouterModule,
    NotfoundComponent,
    HttpClientModule,
    NetworkErrorComponent,
  ],
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  exports: [
    LayoutComponent,
    NotfoundComponent,
    SpinnerComponent,
    NetworkErrorComponent,
  ],
})
export class SharedModule {}
