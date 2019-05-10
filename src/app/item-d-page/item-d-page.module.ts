import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDPageComponent } from './item-d-page.component';

@NgModule({
  declarations: [ItemDPageComponent],
  imports: [
    CommonModule
  ],

  exports:[
    ItemDPageComponent
  ]
})
export class ItemDPageModule { }
