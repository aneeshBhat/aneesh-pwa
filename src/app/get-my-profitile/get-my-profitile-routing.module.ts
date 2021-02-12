import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMyProfitilePage } from './get-my-profitile.page';

const routes: Routes = [
  {
    path: '',
    component: GetMyProfitilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetMyProfitilePageRoutingModule {}
