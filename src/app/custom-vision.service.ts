import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "./Image";

const httpOptions = {
  headers: new HttpHeaders({
    'Prediction-Key':  'e4f1fda26c264b41b4326346be2d9bc9',
    'Training-Key': 'f1de80ae7b274aa48845c33f602790b2'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CustomVisionService {
  constructor(private http: HttpClient) { }
  img: Image = new Image('https://cdn.shopify.com/s/files/1/0281/7544/products/Teal-1_1024x.progressive.jpg?v=1510702733');

  predict(): Observable<any>{
    return this.http.post('https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Response/84d8da94-beef-4bbb-b45c-bc57c4324350/url?iterationId=160628af-a4d8-4cf8-bbd4-0a64cfe2b919',this.img, httpOptions);
  }
}
