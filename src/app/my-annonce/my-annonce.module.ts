import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAnnoncePageRoutingModule } from './my-annonce-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MyAnnoncePage } from './my-annonce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAnnoncePageRoutingModule,
    MatMenuModule
  ],
  declarations: [MyAnnoncePage]
})
export class MyAnnoncePageModule {}
