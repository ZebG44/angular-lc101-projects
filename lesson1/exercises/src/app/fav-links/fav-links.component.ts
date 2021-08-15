import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://www.energy.gov/eere/wind/advantages-and-challenges-wind-energy", "https://hbr.org/", "https://www.crossfit.com/"]; 

  constructor() { }

  ngOnInit() {
  }

}
