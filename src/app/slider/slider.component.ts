import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  customOptions: OwlOptions = {

    autoplay : true,
    autoplayTimeout : 7000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<' , '>'],
    responsive: {
      200: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1050: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    nav : true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
