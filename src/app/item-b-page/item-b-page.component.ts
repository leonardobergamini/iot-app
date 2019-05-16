import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import * as $ from 'jquery';
import { ItemBPageService } from './item-b-page.service';


@Component({
  selector: 'iot-item-b-page',
  templateUrl: './item-b-page.component.html',
  styleUrls: ['./item-b-page.component.css']
})
export class ItemBPageComponent implements OnInit {

  conteudo: string = '';
  options: string[] = ['Arduino'];
  itemService: ItemBPageService;

  constructor(private http:HttpClient) { }

  ngOnInit() {
      this.itemService = new ItemBPageService(this.http);
  }

  toggleResultado(){
    $('.loading').toggleClass('hide');

    this.itemService.getItemB().toPromise()
      .then(response =>{
        console.log(response);
        this.conteudo = JSON.stringify(response);
      })
      .catch(err => {
        console.log(err);
        $('.resultado').toggleClass('hide').text('Erro ao consultar API. Tente novamente.');
      })
      .finally(() => {
        $('.loading').toggleClass('hide');
        $('.resultado').toggleClass('hide');
      });
  }

}
