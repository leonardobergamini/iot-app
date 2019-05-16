import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectDispositivoComponent } from './select-dispositivo.component';
import { MzSelectModule } from 'ngx-materialize'


@NgModule({
  declarations: [SelectDispositivoComponent],
  imports: [
    CommonModule,
    MzSelectModule
  ],

  exports: [
    SelectDispositivoComponent
  ]
})
export class SelectDispositivoModule { }
