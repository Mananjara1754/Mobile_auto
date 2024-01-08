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

//Dependance de FireBase
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//....


export const firebaseConfig = {
  apiKey: 'AIzaSyAOMkaFgBJjD_DDhaOboBMTidiYPfRQnfg',
  authDomain: 'annonce-9b4a6.firebaseapp.com',
  databaseURL: 'https://annonce-9b4a6-default-rtdb.firebaseio.com',
  projectId: 'annonce-9b4a6',
  storageBucket: 'annonce-9b4a6.appspot.com',
  messagingSenderId: '587589076456'
};

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
