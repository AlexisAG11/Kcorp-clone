import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SearchLogoComponent } from './logoSVG/search-logo/search-logo.component';
import { UserLogoComponent } from './logoSVG/user-logo/user-logo.component';
import { HeartLogoComponent } from './logoSVG/heart-logo/heart-logo.component';
import { ShopComponent } from './features/shop/shop.component';
import { BlueHeartComponent } from './features/blue-heart/blue-heart.component';
import { PartenairesComponent } from './features/partenaires/partenaires.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SearchLogoComponent,
    UserLogoComponent,
    HeartLogoComponent,
    ShopComponent,
    BlueHeartComponent,
    PartenairesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
