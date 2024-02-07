import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PushNotifications, PushNotificationSchema, RegistrationError, ActionPerformed } from '@capacitor/push-notifications';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.page.html',
  styleUrls: ['./debut.page.scss'],
})
export class DebutPage implements OnInit {

  constructor(private route:Router) {
    this.ngOnInit();
  }
  async registerPushNotifications(){
    let permStatus = await PushNotifications.checkPermissions();
    alert(JSON.stringify(permStatus));
    if (permStatus.receive === 'prompt' ) {
      permStatus = await PushNotifications.requestPermissions();
    }
    if (permStatus.receive !== 'granted' ) {
      alert('User denied permissions!');
    }
    if (permStatus.receive === 'granted' ) {
      try{
        await PushNotifications.register();
      }catch(e){
        alert(JSON.stringify(e));
      }
    }
  }
  
  ngOnInit() {
    this.registerPushNotifications();
    this.tokenExisteDansLocalStorage();
  }
  tokenExisteDansLocalStorage(){
    const token = localStorage.getItem('token');
    if(token!==null){
      this.route.navigate(['/accueil']);
    }
  }
}
