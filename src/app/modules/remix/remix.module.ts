import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemixRoutingModule } from './remix-routing.module';

import { CustomizePageComponent } from './containers';
import { SharedModule } from '../shared';
import { NgxsModule } from '@ngxs/store';
import { RemixState } from './+state/remix.state';

const CONTAINERS = [CustomizePageComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([
      RemixState
    ]),
    RemixRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class RemixModule { }
