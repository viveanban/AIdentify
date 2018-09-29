import { Component, OnInit } from '@angular/core';
import {CustomVisionService} from "../custom-vision.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cusVisionService: CustomVisionService) { }

  ngOnInit() {
  }

  predict(img: Image){
    this.cusVisionService.predict();
  }

}
