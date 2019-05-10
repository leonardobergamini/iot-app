import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAPageComponent } from './item-a-page.component';

@NgModule({
  declarations: [ItemAPageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemAPageComponent
  ]
})
export class ItemAPageModule { }
