import { Component, OnInit } from '@angular/core';
import {CustomVisionService} from "../custom-vision.service";
import {Image} from "../Image";
import {Prediction} from "../Prediction";
import {Response} from "../Response";
import { uploadFiles } from '../../scripts/home.js';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prediction: Prediction;
  image: Image = new Image('');
  buttonText: string = 'Choose File';

  imgUrl: string;
  constructor(private cusVisionService: CustomVisionService) { }
  ngOnInit() {
  }

  sendRequest(event: any){
    alert('sent request: '+event);
    this.image.Url = event;
    this.predict(this.image);
  }

  predict(img: Image){
    this.cusVisionService.predict(img).subscribe((value =>
    {
      value = value as Response;
      alert(JSON.stringify(value));
      //this.prediction = value.prediction.probability;
/*
* ,"predictions":[{"probability":0.000152519176,"tagId":"0b5eb028-b7e0-4826-937f-0a1e22114c0e","tagName":"Abhijit Bottle"},
*                 {"probability":5.14187832e-7,"tagId":"7d1f5fb1-33e6-462f-b2b3-ece9b9cc765a","tagName":"Water Bottle"}]
* */

/*
* "predictions":[{"probability":0.06439919,"tagId":"7d1f5fb1-33e6-462f-b2b3-ece9b9cc765a","tagName":"Water Bottle"},
*                {"probability":0.0557354279,"tagId":"0b5eb028-b7e0-4826-937f-0a1e22114c0e","tagName":"Abhijit Bottle"}]
* */

      this.prediction = value.predictions[0];
      console.log("percentages: "+ JSON.stringify(this.prediction));

      document.getElementById("final").innerHTML = "Best Match: " + this.prediction.tagName +",<br>Confidence: " +this.prediction.probability.toString();

      if(this.prediction.probability <= 0.942) {
        document.getElementById("final").innerHTML += "<br>This is not one of the owner's item.";
        document.getElementById("final").style.color = "red";
      }
      else {
        document.getElementById("final").innerHTML += "<br>This is "+ this.prediction.tagName + "'s water bottle.";
        document.getElementById("final").style.color = "green";
      }

    }));
  }

}
