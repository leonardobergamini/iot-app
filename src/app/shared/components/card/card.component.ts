import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() conteudo: string = '';
  constructor() { }

  ngOnInit() {
  }

}
