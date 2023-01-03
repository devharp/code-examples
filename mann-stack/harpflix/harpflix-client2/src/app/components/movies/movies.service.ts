import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public movies = {
    results: [0,0,0,0,0]
  }
  constructor() { }

  setData(payload: any){
    console.log({payload});
    
  }
}
