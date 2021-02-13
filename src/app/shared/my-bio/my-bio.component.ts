import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-my-bio',
  templateUrl: './my-bio.component.html',
  styleUrls: ['./my-bio.component.scss'],
})
export class MyBioComponent implements OnInit {
  img:any = "assets/images/ani.jpeg";
  constructor(private colorService:ServiceService) { }
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
    speed: 400
  };
  ngOnInit() {
    this.colorService.currentColor.pipe().subscribe(color=>{
      console.log(color)
      var bgColr = <HTMLElement|any>document.querySelector('.user');
      //  console.log(textCol);
        // this.sidebarColor = color;
        console.log(bgColr)
        if(bgColr != undefined ){
          bgColr.setAttribute('data-color',color);
        }
    })
    
  }

}
