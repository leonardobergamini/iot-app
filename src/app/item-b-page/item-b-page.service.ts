import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ItemBPageService {

  constructor(private http:HttpClient) { }

 getItemB(){
    return this.http.get("http://localhost:8080/nac2-iot/fiap/iot/turma/4sis/grupo/nostres/devtype/arduino/1009/sensor/all");
  }
}
