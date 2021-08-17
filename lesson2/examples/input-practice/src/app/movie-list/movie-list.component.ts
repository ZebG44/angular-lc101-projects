import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // addMovie (newTitle: string) {
   //    if(!this.movies.includes(newTitle)){
   //       this.movies.push(newTitle);
   //    } 
   // }

   addMovie (newTitle: string) {
      let errorMsg = '';
      if(newTitle === ''){
         errorMsg = "Please enter a movie title.";
         window.alert(errorMsg);
      } else if (this.movies.includes(newTitle)) {
         errorMsg = `${newTitle} is already in your movie list.`;
         window.alert(errorMsg);
      } else {
         this.movies.push(newTitle);
      }
      return errorMsg;
   }
}