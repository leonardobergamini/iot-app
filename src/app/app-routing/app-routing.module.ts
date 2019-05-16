import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPageComponent } from '../inicio-page/inicio-page.component';
import { ItemAPageComponent } from '../item-a-page/item-a-page.component';
import { ItemBPageComponent } from '../item-b-page/item-b-page.component';
import { ItemCPageComponent } from '../item-c-page/item-c-page.component';
import { ItemDPageComponent } from '../item-d-page/item-d-page.component';
import { ItemEPageComponent } from '../item-e-page/item-e-page.component';



const routes: Routes = [
  {path:'', component: InicioPageComponent},
  {path:'inicio', component: InicioPageComponent},
  {path:'item-a', component: ItemAPageComponent},
  {path:'item-b', component: ItemBPageComponent},
  {path:'item-c', component: ItemCPageComponent},
  {path:'item-d', component: ItemDPageComponent},
  {path:'item-e', component: ItemEPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
