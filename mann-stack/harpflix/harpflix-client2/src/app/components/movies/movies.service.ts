import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ElementType } from 'src/app/interface/element-type.interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movieListener = new Subject<Array<ElementType>>();
  observer = this.movieListener.asObservable();

  constructor() { }

  setMovies(movies: Array<ElementType>){
    this.movieListener.next(movies);
  }

}
