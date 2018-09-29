import { Injectable } from '@angular/core';
import {HttpClient} from "selenium-webdriver/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomVisionService {

  constructor(private http: HttpClient) { }

  predict(): Observable<any>{
    return this.http.post('','');
  }
}
