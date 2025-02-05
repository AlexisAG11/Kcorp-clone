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
import { OffCanvaComponent } from './layout/off-canva/off-canva.component';
import { ProKit2025Component } from './features/collections/pro-kit2025/pro-kit2025.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from '@angular/material/slider';
import {MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { ChromaComponent } from './features/collections/chroma/chroma.component';
import { MaillotPro2025Component } from './features/products/maillot-pro-2025/maillot-pro-2025.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


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
    OffCanvaComponent,
    ProKit2025Component,
    ChromaComponent,
    MaillotPro2025Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
