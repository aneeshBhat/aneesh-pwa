import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MyNameComponent implements OnInit {
  ngClass="job-title";
  showJobTitle= true;
  constructor() { }

  async ngOnInit() {
    this.changeSidebarColor('black');
    //emit value every second
const message = interval(4000);
//emit value after five seconds
const delayForFiveSeconds = () => timer(3000);
//after 5 seconds, start emitting delayed interval values
const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
//log values, delayed for 5 seconds
//ex. output: 5s....1...2...3
const subscribe = delayWhenExample.subscribe(val => {
  // this.showJobTitle =false;
  this.showJobTitle = this.showJobTitle ? this.showJobTitle = false : this.showJobTitle = true;
  console.log(val,this.showJobTitle)
  })
}

changeSidebarColor(color){
  // var sidebar = <HTMLElement>document.querySelector('.ionContent');
  var textCol = <HTMLElement>document.querySelector('.title');
 console.log(textCol);
  // this.sidebarColor = color;
  if(textCol != undefined){
      // sidebar.setAttribute('data-color',color);
      // textCol.setAttribute('data-color',color);
  }
}

}
