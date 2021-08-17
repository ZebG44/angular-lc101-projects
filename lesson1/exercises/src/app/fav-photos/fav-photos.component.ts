import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg';
  image2 = 'http://webmeup.com/upload/blog/lead-image-105.png';
  image3 = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  
  constructor() { }

  ngOnInit() {
  }

}