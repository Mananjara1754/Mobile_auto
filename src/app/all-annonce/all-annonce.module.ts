import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAnnoncePageRoutingModule } from './all-annonce-routing.module';

import { AllAnnoncePage } from './all-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllAnnoncePageRoutingModule
  ],
  declarations: [AllAnnoncePage]
})
export class AllAnnoncePageModule {}
