import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { GetMyProfitilePageRoutingModule } from './get-my-profitile-routing.module';

import { GetMyProfitilePage } from './get-my-profitile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GetMyProfitilePageRoutingModule
  ],
  declarations: [GetMyProfitilePage]
})
export class GetMyProfitilePageModule {}
