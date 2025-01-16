import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './features/shop/shop.component';
import { BlueHeartComponent } from './features/blue-heart/blue-heart.component';
import { PartenairesComponent } from './features/partenaires/partenaires.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'boutique', component: ShopComponent},
  { path: 'blue-heart', component: BlueHeartComponent},
  { path: 'partenaires', component: PartenairesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
