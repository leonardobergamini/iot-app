import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemEPageService } from './item-e-page.service';
import * as $ from 'jquery';

@Component({
  selector: 'iot-item-e-page',
  templateUrl: './item-e-page.component.html',
  styleUrls: ['./item-e-page.component.css']
})
export class ItemEPageComponent implements OnInit {
  
  itemService: ItemEPageService;
  conteudo: string = '';
  comando: string = '';
  valor: string[] = [];
  selecionado: string = '';

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.itemService = new ItemEPageService(this.http);
  }

  toggleResultado(){
    $('.loading').toggleClass('hide');
    this.itemService.getItemE(this.valor).toPromise()
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
      setTimeout(() => $('.resultado').toggleClass('hide'), 3000)
    });
  }

  selecionarComando(event){
    this.selecionado = event.target.querySelector('p').textContent;
    this.valor = this.selecionado.trim().split(':');
    $('#btn-requisitar').removeClass('disabled');
  }

}
