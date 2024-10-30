import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  photos = [
    './assets/ph1.png',
    './assets/ph3.png',
    './assets/ph4.png',
    './assets/ph2.jpg',
    './assets/ph5.png',
    './assets/ph6.jpg',
    './assets/ph1.png',
    './assets/ph3.png',
    './assets/ph4.png',
    './assets/ph2.jpg',
    './assets/ph5.png',
    './assets/ph6.jpg',

  ];
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.photos.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
  }

}
