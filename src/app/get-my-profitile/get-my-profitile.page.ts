import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides,IonSelect} from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of, timer, interval } from 'rxjs';
import { Email } from '@teamhive/capacitor-email';
import { Capacitor } from '@capacitor/core';
import { Plugins } from '@capacitor/core';
import { debounce, debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
// const { Email } = Plugins;

@Component({
  selector: 'app-get-my-profitile',
  templateUrl: './get-my-profitile.page.html',
  styleUrls: ['./get-my-profitile.page.scss'],
})
export class GetMyProfitilePage implements OnInit {
@ViewChild('slide',{static:true}) slide:IonSlides;
@ViewChild('select',{static:true})select:IonSelect;
email: Email;
registerEmail: FormGroup;
slideOpts = {
  initialSlide: 0,
  slidesPerView: 1,
  speed: 400
};

  constructor(private formBuilder: FormBuilder,private alertController: AlertController) { }
  get f() { 
    // console.log(this.registerEmail.controls);
    return this.registerEmail.controls; 
  }
  openDraft() {
    this.email.openDraft();
}
  PrfileType(prfl){
    console.log(prfl);
    // this.openDraft();
    this.openEmail()
  }

  async openEmail(app?: string) {
    try {
        await this.email.hasPermission();
    } catch (e) {
        await this.email.requestPermission();
    }
    try {
      await this.email.hasPermission();
      const hasAccount = await this.email.isAvailable({
          alias : app
      });
      if (hasAccount.hasAccount) {
          this.email.open({
              to: ['fortune.osei@gmail.com', 'fortune.osei@hotmail.com'],
              cc: ['fortune.osei@yahoo.com'],
              bcc: ['osei.fortune@outlook.com'],
              subject: 'Test',
              body: 'Help',
              app: app
          });
      } else {
          const alert = await this.alertController.create({
              header: 'Email is not setup',
              buttons: [
                  'OK'
              ]
          });

          await alert.present();
      }
  } catch (e) {
      const alert = await this.alertController.create({
          header: 'Accounts permission required',
          buttons: [
              'OK'
          ]
      });

      await alert.present();
  }
  }
  
  ngOnInit() {
    this.email = new Email();
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable('Email');
    console.log(isPushNotificationsAvailable)
    // this.email.open();
    this.openEmail('gmail');
  //  const t = Email.
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
        this.select.open();
      }
      console.log(val,this.registerEmail.valid,'valchanges');
    })
  }

  next(){
    this.slide.lockSwipes(false);
    this.slide.lockSwipes(true);
  //  this.slide.slidePrev(100)
  }

}
