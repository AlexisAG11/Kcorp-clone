import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './features/shop/shop.component';
import { BlueHeartComponent } from './features/blue-heart/blue-heart.component';
import { PartenairesComponent } from './features/partenaires/partenaires.component';
import { ProKit2025Component } from './features/collections/pro-kit2025/pro-kit2025.component';
import { ChromaComponent } from './features/collections/chroma/chroma.component';
import { MaillotPro2025Component } from './features/products/maillot-pro-2025/maillot-pro-2025.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'boutique', component: ShopComponent},
  { path: 'blue-heart', component: BlueHeartComponent},
  { path: 'partenaires', component: PartenairesComponent},
  { path: 'collections/prokit2025', component: ProKit2025Component},
  { path: 'collections/chroma', component: ChromaComponent},
  { path: 'products/Maillot-Pro-2025', component: MaillotPro2025Component},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
