import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CupComponent } from './components';

const COMPONENTS = [CupComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
