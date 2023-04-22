import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LikeToDesignComponent } from '../like-to-design/like-to-design.component';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.scss']
})
export class Carousel2Component implements OnInit{

  @Input() images: carouselImage[] =[]
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 3000;


selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();

    }
  }

  // Changes slide in every 3 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  constructor(private dialog : MatDialog){}

  openDialog(){
  this.dialog.open(LikeToDesignComponent)
  }

}


