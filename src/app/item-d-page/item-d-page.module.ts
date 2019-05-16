import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemDPageComponent } from './item-d-page.component';
import { CardModule } from '../shared/components/card/card.module';
import { MzSpinnerModule } from 'ngx-materialize';
import { HeaderModule } from '../shared/components/header/header.module';

@NgModule({
  declarations: [ItemDPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    CardModule,
    MzSpinnerModule
  ],

  exports:[
    ItemDPageComponent
  ]
})
export class ItemDPageModule { }
