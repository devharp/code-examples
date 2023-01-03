import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent {

  query = [];
  userquery = '';
  @Output() searchbtn = new EventEmitter<string>();
  
  constructor(private http: HttpClient){}

  searchQuery(event: any){
    // console.log(event);
    this.userquery = event;
    if(event.length === 0){
      this.query = [];
      return;
    }
    this.http.get('http://localhost:3000/search?query=' + encodeURIComponent(event)).subscribe((e: any) => {
      // console.log(e);  
      this.query = e.results;
    })    
  }

  setUserQuery(event: any){
    console.log('clicked ', {event});
    this.userquery = event;
    this.query = [];
  }

  searchBtnClicked(){
    console.log({ userquery: this.userquery });
    this.searchbtn.emit(this.userquery);
    this.query = [];
    
  }

  detectKeyPress(event: any){
    if(event.keyCode === 27){ this.query = []; }
    if(this.userquery.length === 0){ this.query = [] }

    if(event.keyCode === 13){
      this.query = [];
      this.searchbtn.emit(this.userquery);
    }
    // console.log(event.keyCode);
    
  }
}
