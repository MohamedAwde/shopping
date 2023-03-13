import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    SpinnerComponent,
    RouterModule,
    NotfoundComponent,
    HttpClientModule,
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  exports: [LayoutComponent, NotfoundComponent, SpinnerComponent],
})
export class SharedModule {}
