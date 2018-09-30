import { Component, OnInit } from '@angular/core';
import {CustomVisionService} from "../custom-vision.service";
import {Image} from "../Image";
import {Prediction} from "../Prediction";
import {Response} from "../Response";
import { uploadFiles } from '../../scripts/home.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prediction: Prediction;
  image: Image = new Image('');
  buttonText: string = 'Choose File';
  constructor(private cusVisionService: CustomVisionService) { }
  ngOnInit() {
  }

  sendRequest(img: Image){
    this.image = img;
    this.predict(this.image);
  }



  predict(img: Image){
    this.cusVisionService.predict(img).subscribe((value =>
    {
      value = value as Response;
      this.prediction = value.prediction;
    }));
  }

}
