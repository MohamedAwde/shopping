import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  imports: [CommonModule, RouterModule, NotfoundComponent],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  exports: [LayoutComponent, NotfoundComponent],
})
export class SharedModule {}
