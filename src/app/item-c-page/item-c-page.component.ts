import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemCPageService } from './item-c-page.service';
import * as $ from 'jquery';

@Component({
  selector: 'iot-item-c-page',
  templateUrl: './item-c-page.component.html',
  styleUrls: ['./item-c-page.component.css']
})
export class ItemCPageComponent implements OnInit {

  conteudo: string = '';
  sensor: string = '';
  itemService: ItemCPageService;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.itemService = new ItemCPageService(this.http);
  }

  selecionarFotorresistor(){
    this.sensor = $('#fotorresistor').text();
    $('#btn-requisitar').removeClass('disabled');
    return $('#fotorresistor').text();
  }

  selecionarTemperatura(){
    this.sensor = $('#temperatura').text();
    $('#btn-requisitar').removeClass('disabled');
    return $('#temperatura').text();
  }

  toggleResultado(){
    $('.loading').toggleClass('hide');
    this.itemService.getItemC(this.sensor).toPromise()
    .then(response => {
      console.log(response);
      this.conteudo = (JSON.stringify(response));
      $('.resultado').toggleClass('hide');
    })
    .catch(err => {
      console.log(err);
      this.conteudo = 'Erro ao consultar API. Tente novamente.';
    })
    .finally(() => {
      $('.loading').toggleClass('hide');
      setTimeout(() => $('.resultado').toggleClass('hide'), 3000);
    });
  }

}
