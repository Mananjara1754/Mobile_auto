import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";

import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MatTabsModule } from '@angular/material/tabs';
// import { PushNotifications } from '@capacitor/push-notifications';
import { registerWebPlugin } from '@capacitor/core';

//import { AngularFireModule } from '@angular/fire';
// import { AngularFireMessaging } from '@angular/fire/messaging';


//Dependance de FireBase
//import { AngularFireModule } from "@angular/fire/compat"
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
//....
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';


// export const firebaseConfig = {
//   apiKey: 'AIzaSyAOMkaFgBJjD_DDhaOboBMTidiYPfRQnfg',
//   authDomain: 'annonce-9b4a6.firebaseapp.com',
//   databaseURL: 'https://annonce-9b4a6-default-rtdb.firebaseio.com',
//   projectId: 'annonce-9b4a6',
//   storageBucket: 'annonce-9b4a6.appspot.com',
//   messagingSenderId: '587589076456'
// };

// Register the service worker
if ('serviceWorker' in navigator && environment.production) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
registerLocaleData(localeFr);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
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
  providers: [

    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {appearance: 'outline'}
    }
  ],
  bootstrap: [AppComponent]
  
})

export class AppModule {
  
}
