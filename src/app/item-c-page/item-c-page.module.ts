import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCPageComponent } from './item-c-page.component';
import { MzSpinnerModule } from 'ngx-materialize';
import { HeaderModule } from '../shared/components/header/header.module';
import { CardModule } from '../shared/components/card/card.module';


@NgModule({
  declarations: [ItemCPageComponent],
  imports: [
    CommonModule,
    MzSpinnerModule,
    HeaderModule,
    CardModule
  ],

  exports: [
    ItemCPageComponent
  ]

})
export class ItemCPageModule { }
