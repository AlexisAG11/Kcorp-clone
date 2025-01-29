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
import { RightArrowComponent } from './logoSVG/right-arrow/right-arrow.component';
import { ShopBannerComponent } from './features/shop/shop-section/shop-banner/shop-banner.component';
import { ShopPartenairesComponent } from './features/shop/shop-section/shop-partenaires/shop-partenaires.component';
import { ShopDerniereCollectionComponent } from './features/shop/shop-section/shop-derniere-collection/shop-derniere-collection.component';
import { ShopBundleComponent } from './features/shop/shop-section/shop-bundle/shop-bundle.component';
import { ShopEditorialComponent } from './features/shop/shop-section/shop-editorial/shop-editorial.component';
import { ShopProductsComponent } from './features/shop/shop-section/shop-products/shop-products.component';
import { ShopKcorpComponent } from './features/shop/shop-section/shop-kcorp/shop-kcorp.component';
import { ShopVideoComponent } from './features/shop/shop-section/shop-video/shop-video.component';
import { ShopInstagramComponent } from './features/shop/shop-section/shop-instagram/shop-instagram.component';
import { ShopNewsletterComponent } from './features/shop/shop-section/shop-newsletter/shop-newsletter.component';
import { FooterPaiementListSvgComponent } from './layout/footer/footer-paiement-list-svg/footer-paiement-list-svg.component';

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
    RightArrowComponent,
    ShopBannerComponent,
    ShopPartenairesComponent,
    ShopDerniereCollectionComponent,
    ShopBundleComponent,
    ShopEditorialComponent,
    ShopProductsComponent,
    ShopKcorpComponent,
    ShopVideoComponent,
    ShopInstagramComponent,
    ShopNewsletterComponent,
    FooterPaiementListSvgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
