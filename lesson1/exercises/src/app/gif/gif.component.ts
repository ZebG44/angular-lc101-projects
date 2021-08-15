import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gif1 = 'https://giphy.com/gifs/coding-programming-ninjas-CcwLAV11cALh3OuEJ5';

  constructor() { }

  ngOnInit() {
  }

}
