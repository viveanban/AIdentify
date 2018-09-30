import { Component, OnInit } from '@angular/core';
import {CustomVisionService} from "../custom-vision.service";
import {Image} from "../Image";
import {Prediction} from "../Prediction";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prediction: Prediction;
  constructor(private cusVisionService: CustomVisionService) { }

  ngOnInit() {
  }

  predict(){
    this.cusVisionService.predict().subscribe((value => {this.prediction = value.prediction}));
  }

}
