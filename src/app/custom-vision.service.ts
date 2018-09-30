import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "./Image";

const httpOptions = {
  headers: new HttpHeaders({
    'Prediction-Key':  '741d986b370c49ac819413dccc393232',
    'Training-Key': 'a13310775c3644ecb8ec7d03b8b154c9',
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomVisionService {
  constructor(private http: HttpClient) { }

  predict(img: Image): Observable<any>{
    console.log("Servicing: "+img.Url);
    return this.http.post('https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Prediction/3a804674-2855-44f2-9b16-4b451662808f/url',img, httpOptions);

   // return this.http.post('https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Response/84d8da94-beef-4bbb-b45c-bc57c4324350/url?iterationId=160628af-a4d8-4cf8-bbd4-0a64cfe2b919',img, httpOptions);
  }
}
