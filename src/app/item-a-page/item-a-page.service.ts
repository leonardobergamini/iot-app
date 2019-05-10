import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemAPageService {

  constructor(private http: HttpClient) { }

  getItemA(){
    return this.http.get("URL");
  }
}
