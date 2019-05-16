import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemEPageService {

  constructor(private http:HttpClient) { }
  URL:string = '';

  getItemE(valor: string[]){
    
    let mensagem:string = `{"value": "${valor[1].toLowerCase().trim()}"}`;

    return this.http.post(`http://localhost:8080/nac2-iot/fiap/iot/turma/4sis/grupo/nostres/devtype/arduino/1/cmd/${valor[0].toLowerCase().trim()}`, 
    mensagem, 
    {responseType: 'text'});
  }
}
