import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'essemmi';

  images = [{
    imageSrc:
      '/images/shoe1.jpg',
    imageAlt: 'shoe1',
  },
  {
    imageSrc:
      '/images/shoe2.png',
    imageAlt: 'shoe2',
  },
  {
    imageSrc:
      '/images/shoe3.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      '/images/shoe4.png',
    imageAlt: 'shoe3',
  },
  {
    imageSrc:
      '/images/shoe5.png',
    imageAlt: 'shoe3',
  }
]
}
