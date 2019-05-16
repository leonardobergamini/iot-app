import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'iot-select-dispositivo',
  templateUrl: './select-dispositivo.component.html',
  styleUrls: ['./select-dispositivo.component.css']
})
export class SelectDispositivoComponent implements OnInit {

  @Input() options: string[] = []
  constructor() { }

  ngOnInit() {
    console.log(this.options);
    this.options.forEach(option => {
      $('#options-select').append(`<option value='${option}'>${option}</option>`);
    });
  }

}
