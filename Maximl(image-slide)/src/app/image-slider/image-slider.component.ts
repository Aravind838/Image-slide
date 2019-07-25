import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  images = [ 
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers1dde2dff.jpg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers2f856ebb.jpg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers3c9095c4.jpg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers40b07bc7.jpg',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/Avengers51fd2ccc.jpg'
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
   }

  ngOnInit() {
  }

}
