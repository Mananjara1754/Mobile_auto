import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAnnoncePage } from './my-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: MyAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAnnoncePageRoutingModule {}
