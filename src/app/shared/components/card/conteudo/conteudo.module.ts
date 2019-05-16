import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoComponent } from './conteudo.component';

@NgModule({
  declarations: [ConteudoComponent],
  imports: [
    CommonModule
  ],

  exports:[
    ConteudoComponent
  ]
})
export class ConteudoModule { }
