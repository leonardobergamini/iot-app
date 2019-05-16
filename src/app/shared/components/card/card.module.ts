import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { MzCardModule } from 'ngx-materialize'
import { ConteudoModule } from './conteudo/conteudo.module';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MzCardModule,
    ConteudoModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
