import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as $ from 'jquery';

import { ItemAPageService } from './item-a-page.service';



@Component({
  selector: 'iot-item-a-page',
  templateUrl: './item-a-page.component.html',
  styleUrls: ['./item-a-page.component.css']
})


export class ItemAPageComponent implements OnInit {

  //private http: HttpClient
  constructor() { }

  ngOnInit() {
    // $('#btn-requisitar').click(() =>{
    //   const itemService = new ItemAPageService(this.http);

    //   itemService.getItemA().subscribe(
    //     response => console.log(response),
    //     err => console.log(err.message)
    //   )
    // });

  }

}
