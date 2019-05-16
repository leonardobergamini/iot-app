import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoModule } from './shared/components/barra-navegacao/barra-navegacao.module';
import { InicioPageModule } from './inicio-page/inicio-page.module';
import { ItemAPageModule } from './item-a-page/item-a-page.module';
import { ItemBPageModule } from './item-b-page/item-b-page.module';
import { ItemCPageModule } from './item-c-page/item-c-page.module';
import { ItemDPageModule } from './item-d-page/item-d-page.module';
import { ItemEPageModule } from './item-e-page/item-e-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicioPageModule,
    ItemAPageModule,
    ItemBPageModule,
    ItemCPageModule,
    ItemDPageModule,
    ItemEPageModule,    
    HttpClientModule,
    BarraNavegacaoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
