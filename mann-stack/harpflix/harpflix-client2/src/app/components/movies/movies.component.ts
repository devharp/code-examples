import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies = [0, 2, 3]
  
  constructor(public service: MoviesService){
  }
  
  ngOnInit(){
    this.service.setData('herere');
  }
}
