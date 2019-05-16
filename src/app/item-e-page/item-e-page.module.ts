import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemEPageComponent } from './item-e-page.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { MzSpinnerModule } from 'ngx-materialize';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
  declarations: [ItemEPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MzSpinnerModule,
    CardModule
  ]
})
export class ItemEPageModule { }
