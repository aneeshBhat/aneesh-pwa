import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

  // import { MyBioComponent} from '../shared/my-name/my-name.component';
import { MyNameComponent,MyBioComponent} from '../shared/index';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MyNameComponent,MyBioComponent]
})
export class HomePageModule {}
