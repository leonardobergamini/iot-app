import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemBPageComponent } from './item-b-page.component';
import { SelectDispositivoModule } from '../shared/components/select-dispositivo/select-dispositivo.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { MzSpinnerModule, MzSelectModule } from 'ngx-materialize';
import { CardModule } from '../shared/components/card/card.module';

@NgModule({
  declarations: [ItemBPageComponent],
  imports: [
    CommonModule,
    SelectDispositivoModule,
    HeaderModule, 
    MzSpinnerModule,
    CardModule,
    MzSelectModule
  ],
  exports: [
    ItemBPageComponent
  ]
})
export class ItemBPageModule { }
