import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDVyOXzMFfyOvlVNrxW2aIhFEgcO-YGluE",
      authDomain: "notification-cloud-s5.firebaseapp.com",
      projectId: "notification-cloud-s5",
      storageBucket: "notification-cloud-s5.appspot.com",
      messagingSenderId: "1091105700339",
      appId: "1:1091105700339:web:400359e471ef15dfe57a86",
      measurementId: "G-84XVC9Z38Q",
    },),
    AngularFireMessagingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
