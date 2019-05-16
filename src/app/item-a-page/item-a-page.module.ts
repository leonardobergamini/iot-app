import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAPageComponent } from './item-a-page.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { CardModule } from '../shared/components/card/card.module';
import { MzSpinnerModule } from 'ngx-materialize';

@NgModule({
  declarations: [ItemAPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CardModule,
    MzSpinnerModule
  ],
  exports: [
    ItemAPageComponent
  ]
})
export class ItemAPageModule { }
