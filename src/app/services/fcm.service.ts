import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  constructor(private angularFireMessaging: AngularFireMessaging) {
    // this.angularFireMessaging.messages.subscribe((messaging) => {
    //   // Double-check if these properties are correct
    //   // messaging.onMessage = messaging.onMessage.bind(messaging);
    //   // messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
    // });
  }

  // requestPermission(): Observable<any> {
  //   return new Observable(observer => {
  //     this.angularFireMessaging.requestToken.subscribe(
  //       (token) => {
  //         console.log('FCM Token:', token);
  //         observer.next(token);
  //         observer.complete();
  //       },
  //       (error) => {
  //         console.error(error);
  //         observer.error(error);
  //       }
  //     );
  //   });
  // }
}
