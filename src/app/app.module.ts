import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { InicioPageModule } from './inicio-page/inicio-page.module';
import { ItemAPageModule } from './item-a-page/item-a-page.module';
import { ItemBPageModule } from './item-b-page/item-b-page.module';
import { ItemCPageModule } from './item-c-page/item-c-page.module';
import { ItemDPageModule } from './item-d-page/item-d-page.module';
import { ItemEPageModule } from './item-e-page/item-e-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarraNavegacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioPageModule,
    ItemAPageModule,
    ItemBPageModule,
    ItemCPageModule,
    ItemDPageModule,
    ItemEPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
