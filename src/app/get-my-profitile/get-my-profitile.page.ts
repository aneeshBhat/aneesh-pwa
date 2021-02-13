import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, timer, interval } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { debounce, debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';

@Component({
  selector: 'app-get-my-profitile',
  templateUrl: './get-my-profitile.page.html',
  styleUrls: ['./get-my-profitile.page.scss'],
})
export class GetMyProfitilePage implements OnInit {
@ViewChild('slide',{static:true}) slide:IonSlides;
registerEmail: FormGroup;
slideOpts = {
  initialSlide: 0,
  slidesPerView: 1,
  speed: 400
};

  constructor(private formBuilder: FormBuilder) { }
  get f() { 
    // console.log(this.registerEmail.controls);
    return this.registerEmail.controls; 
  }
  
  ngOnInit() {
    const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
/*  
    Only emit values after a second has passed between the last emission,
    throw away all other values
*/
const debouncedExample = example.pipe(() => timer(1000));
/*
    In this example, all values but the last will be omitted
    output: 'Last will display'
*/
const subscribe = debouncedExample.subscribe(val => console.log(val));
    this.slide.lockSwipes(true);
    this.registerEmail = this.formBuilder.group({
    
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });

    this.registerEmail.valueChanges.pipe(debounceTime(1500),delay(500)).subscribe(val=>{
      if(this.registerEmail.valid){
        this.slide.lockSwipes(false);
       this.slide.slideNext();
       this.slide.lockSwipes(true);
      }
      console.log(val,this.registerEmail.valid,'valchanges');
    })
  }

  next(){
    this.slide.lockSwipes(false);
    
   console.log(this.slide.slideNext());
   this.slide.lockSwipes(true);
  //  this.slide.slidePrev(100)
  }

}
