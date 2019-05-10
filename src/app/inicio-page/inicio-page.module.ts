import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPageComponent } from './inicio-page.component';

@NgModule({
  declarations: [InicioPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InicioPageComponent
  ]
})
export class InicioPageModule { }
