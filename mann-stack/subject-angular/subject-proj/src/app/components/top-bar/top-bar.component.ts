import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(private commonservice: CommonService){}
  ngOnInit(){

  }

  setValue(val: string){
    this.commonservice.emitValue(val);
  }
}
