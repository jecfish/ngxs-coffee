import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizePageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: CustomizePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemixRoutingModule {}
