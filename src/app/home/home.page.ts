import { HttpClient } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
import { ServiceService } from '../shared/service.service';
import { IonContent} from '@ionic/angular';
const { Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('scroll',{static:true})scroll:IonContent;
  flicker;
  users = [];
  joke = null;
  toolbarColor = "dark";
  ngClass="job-title";
  showJobTitle= false;
  appIsOnline = true;
  iconName ="sunny-outline"
  img:any = "assets/images/ani.jpeg";
  

  constructor(private http: HttpClient,
    private colorService:ServiceService,
    public toastController: ToastController,
    public router:Router) {}

  async ngOnInit() {
    const status = await Network.getStatus();
    this.appIsOnline = status.connected;
 
    Network.addListener('networkStatusChange', (status) => {
      this.appIsOnline = status.connected;
      this.presentToast();
      console.log(status)
    });
    this.changeSidebarColor('black');
//emit value every second
const message = interval(4000);
//emit value after five seconds
const delayForFiveSeconds = () => timer(3000);
//after 5 seconds, start emitting delayed interval values
const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
//log values, delayed for 5 seconds
//ex. output: 5s....1...2...3
this.flicker = delayWhenExample.subscribe(val => {
  this.showJobTitle = this.showJobTitle ? this.showJobTitle = false : this.showJobTitle = true;
  // console.log(val);
});
   
    // this.imageFetch();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  getMyProfitlo(){
   this.router.navigate(['/get-my-profitile']);
  }
  swipUp(){
    this.scroll.scrollToPoint(0,500);
  // console.log(this.scroll.scrollToBottom())
  // this.flicker.unsubscribe();
  // this.flicker.subscribe();
  }

  changeMode(){
    if(this.iconName === "sunny-outline"){
       this.iconName = "moon-outline";
       this.toolbarColor = "light";
       this.changeSidebarColor('white');
    }else{
      this.iconName = "sunny-outline";
      this.toolbarColor = "dark";
      this.changeSidebarColor('black');
    }
    // this.iconName =  this.iconName ?"moon-outline":"sunny-outline";
}

changeSidebarColor(color){
  this.colorService.changeColorState(color);
  var sidebar = <HTMLElement>document.querySelector('.ionContent');
  var textCol = <HTMLElement>document.querySelector('.title');
  var swipUp = <HTMLElement>document.querySelector('.swipUp');
//  console.log(textCol);
  // this.sidebarColor = color;
  if(sidebar != undefined ){
      sidebar.setAttribute('data-color',color);
      textCol.setAttribute('data-color',color);
      swipUp.setAttribute('data-color',color);
      }
}
  getData() {
    this.http.get('https://randomuser.me/api/?results=5').subscribe(result => {
      console.log('results: ', result);
      this.users = result['results'];
    });
  }
 
  getOnlineData() {
    this.http.get('https://api.chucknorris.io/jokes/random').subscribe(result => {
      console.log('joke result: ', result);
      this.joke = result;
    });
  }

  async imageFetch(){
    let response = await fetch('assets/images/ani.jpeg');
    console.log(response)
    if(!response.ok){
      throw new Error (`HTTP error! status: ${response.status}`)
    } else{
      //  this.img =  URL.createObjectURL(response.blob());
      return await response.blob();
    }
    // this.imageFetch().then((blob)=>{

    // })
  }
}
