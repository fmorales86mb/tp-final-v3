import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  baseSrc:string = "../../../assets/images/";
  images:string[];

  constructor() {
    this.images = [
      this.baseSrc + "1.jpg",
      this.baseSrc + "2.jpg",
      this.baseSrc + "3.jpg",
      this.baseSrc + "4.jpg",
    ];
   }

  ngOnInit(): void {
  }

}
