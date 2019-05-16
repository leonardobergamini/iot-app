import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MzNavbarModule} from 'ngx-materialize';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MzNavbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
