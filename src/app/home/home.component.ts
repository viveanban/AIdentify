import { Component, OnInit } from '@angular/core';
import {CustomVisionService} from "../custom-vision.service";
import {Image} from "../Image";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cusVisionService: CustomVisionService) { }

  ngOnInit() {
  }

  predict(event){
    this.cusVisionService.predict(event).subscribe((value => console.log(JSON.stringify(value))));
  }

}
