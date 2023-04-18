import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LikeToDesignComponent } from '../like-to-design/like-to-design.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'essemmi';

  images = [{
    imageSrc:
      '/../assets/images/shoe1.jpg',
    imageAlt: 'shoe1',
  },
  {
    imageSrc:
      '/../assets/images/shoe2.png',
    imageAlt: 'shoe2',
  },
  {
    imageSrc:
      '/../assets/images/shoe3.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      '/../assets/images/shoe4.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      '/../assets/images/shoe5.png',
    imageAlt: 'shoe3',
  }
]


constructor(private dialogRef : MatDialog){}

  openDialog(){
  this.dialogRef.open(LikeToDesignComponent)
  }
}

