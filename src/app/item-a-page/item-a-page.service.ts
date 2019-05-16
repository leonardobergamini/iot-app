import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemAPageService {

  constructor(private http: HttpClient) { }

  getItemA(){
    return this.http.get("http://localhost:8080/nac2-iot/fiap/iot/turma/4sis/grupo/nostres/devtype/arduino/devid/sensor/all");
  }
}
