import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private colorMode = new BehaviorSubject([]);
  currentColor = this.colorMode.asObservable();

  constructor() { }

  changeColorState(color){
   this.colorMode.next(color);
  }
}
