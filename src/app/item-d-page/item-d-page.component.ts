import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemDPageService } from './item-d-page.service';
import * as $ from 'jquery';

@Component({
  selector: 'iot-item-d-page',
  templateUrl: './item-d-page.component.html',
  styleUrls: ['./item-d-page.component.css']
})
export class ItemDPageComponent implements OnInit {

  conteudo: string = '';
  itemService: ItemDPageService;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.itemService = new ItemDPageService(this.http);
  }

  toggleResultado(){
    $('.loading').toggleClass('hide');
    this.itemService.getItemD().toPromise()
    .then(response => {
      console.log(response);
      this.conteudo = (JSON.stringify(response));
    })
    .catch(err => {
      console.log(err);
      this.conteudo = 'Erro ao consultar API. Tente novamente.';
    })
    .finally(() => {
      $('.loading').toggleClass('hide');
      $('.resultado').toggleClass('hide');
    });
  }

}
