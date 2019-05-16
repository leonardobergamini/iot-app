import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioPageComponent } from './inicio-page.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { BarraNavegacaoModule } from '../shared/components/barra-navegacao/barra-navegacao.module';
import { MzButtonModule } from 'ngx-materialize';

@NgModule({
  declarations: [InicioPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    BarraNavegacaoModule,
    MzButtonModule
  ],
  exports: [
    InicioPageComponent
  ]
})
export class InicioPageModule { }
