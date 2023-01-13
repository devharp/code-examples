import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviesService } from './movies.service';
import { ElementType } from 'src/app/interface/element-type.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Array<ElementType> = [];
  constructor(public service: MoviesService){
  }
  
  ngOnInit(){
    this.service.observer.subscribe(res => {
      this.movies = res;
    });
  }
}
