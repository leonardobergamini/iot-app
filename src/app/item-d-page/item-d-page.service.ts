import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemDPageService {

  constructor(private http:HttpClient) { }
  getItemD(){
    return this.http.get(`http://localhost:8080/nac2-iot/fiap/iot/turma/4sis/grupo/nostres/devtype/arduino/1/cmd/all`);
  }
}
