import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarraNavegacaoComponent } from './barra-navegacao.component';
import { MzTabModule } from 'ngx-materialize'
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';

@NgModule({
  declarations: [BarraNavegacaoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MzTabModule,
  ],
  exports: [
    BarraNavegacaoComponent
  ]
})
export class BarraNavegacaoModule { }
