import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-mid-bar',
  templateUrl: './mid-bar.component.html',
  styleUrls: ['./mid-bar.component.scss']
})
export class MidBarComponent {
  public title = 'click on the above buttons';
  constructor(private commonservice: CommonService){
    commonservice.listener.subscribe(e => {
      console.log(e);
      this.title = e;
      
    });
  }
}
