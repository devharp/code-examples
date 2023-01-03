import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elems: any = [];
  search_query: string = '';

  constructor(private http: HttpClient) {
    console.log('this is a constructor');
  }

  async ngOnInit() {
    await this.getTrending();
  }

  here(i: number) {
    console.log('this point')
  }

  async getTrending(query: any = null) {
    return new Promise((resolve, reject) => {

      const link = (query === null || query === undefined) ? 'http://localhost:3000/trending' : `http://localhost:3000/trending?query=${query}`;
  
      this.http.get(link).subscribe((res: any) => {
        // console.log(res['results']);
        this.elems = [];
        for (const e of res['results']) {
          this.elems.push({ ...e, seemore: false })
        }
        resolve(true);
      })
    });

  }

  async onChange(val: any) {
    await this.getTrending(val);
  }
   

  open(){
   const data= document.getElementById('harpreix')
    if(data!=null){
   data.style.display='block'
    }
  }
  close(){
    const data= document.getElementById('harpreix')
    if(data!=null){
   data.style.display='none'
    }
  }

}
