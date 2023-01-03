import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // videos = [
  //   { title: 'Video Title', channel: 'Channel name', views: '5k' },
  //   { title: 'Video Title2', channel: 'anotherChannel name', views: '5k' }
  // ]
  videos: any = []

  constructor(private httpclient: HttpClient){}
  
  searchYTResults(event: string){
    const query = encodeURIComponent(event);
    console.log('search for this: ', query);

    this.httpclient.get('http://localhost:3000/results?search=' + query).subscribe((e) => {
      console.log('request sent success: ', e);
      this.videos = e;
    })

    
  }
}
