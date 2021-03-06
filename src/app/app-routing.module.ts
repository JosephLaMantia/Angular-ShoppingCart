import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsComponent } from './items/Items.component';
import { ItemCartComponent } from './items/Item-cart.component';

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'cart', component: ItemCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
