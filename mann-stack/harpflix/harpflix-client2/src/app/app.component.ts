import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harpflix-client2';

  payload = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Hello World!');

    this.getRequest('http://localhost:3000/trending').subscribe(
      data => {
        this.payload = data.results;
        console.log(this.payload);
        
      },
      err => {
        console.error('An error occurred: ', err);

      });

  }

  getRequest(link: string): Observable<any> {
    return this.http.get(link);
  }
}
