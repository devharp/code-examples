import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private subject = new Subject<string>();
  public listener = this.subject.asObservable();
  constructor() {

  }

  emitValue(val: string){
    this.subject.next(val);
  }


}
