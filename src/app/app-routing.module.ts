import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent, CartPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu'
  },
  {
    path: 'menu',
    component: ListPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'remix',
    loadChildren: './modules/remix/remix.module#RemixModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
