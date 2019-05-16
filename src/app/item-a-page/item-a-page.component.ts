import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as $ from 'jquery';

import { ItemAPageService } from './item-a-page.service';

@Component({
  selector: 'iot-item-a-page',
  templateUrl: './item-a-page.component.html',
  styleUrls: ['./item-a-page.component.css']
})


export class ItemAPageComponent implements OnInit {

  conteudo: string = '';
  itemService: ItemAPageService;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.itemService = new ItemAPageService(this.http);
  }

  toggleResultado(){
    $('.loading').toggleClass('hide');
    this.itemService.getItemA().toPromise()
      .then(response =>{
        this.conteudo = JSON.stringify(response);  
      })
      .catch(err => console.log(err))
      .finally(() => {
        $('.loading').toggleClass('hide')
        $('.resultado').toggleClass('hide')
      })
  }

}
