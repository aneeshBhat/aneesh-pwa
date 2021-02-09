import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bio',
  templateUrl: './my-bio.component.html',
  styleUrls: ['./my-bio.component.scss'],
})
export class MyBioComponent implements OnInit {
  img:any = "assets/images/ani.jpeg";
  constructor() { }

  ngOnInit() {}

}
