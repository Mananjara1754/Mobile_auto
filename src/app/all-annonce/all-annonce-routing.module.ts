import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAnnoncePage } from './all-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: AllAnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAnnoncePageRoutingModule {}
