import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ElementType } from './interface/element-type.interface';
import { MoviesService } from './components/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harpflix-client2';

  payload: Array<ElementType> = [];

  constructor(private http: HttpClient, private moviesService: MoviesService) {}

  ngOnInit() {

    this.getRequest('http://localhost:3000/trending').subscribe(
      data => {
        this.payload = data.results;
        this.moviesService.setMovies(data.results.filter((e: ElementType) => e.media_type === 'movie'))
      },
      err => {
        console.error('An error occurred: ', err);
      });
  }

  getRequest(link: string): Observable<any> {
    return this.http.get(link);
  }
}
