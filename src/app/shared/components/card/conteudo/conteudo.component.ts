import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iot-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  @Input() texto: string = '';
  constructor() { }

  ngOnInit() {
  }

}
