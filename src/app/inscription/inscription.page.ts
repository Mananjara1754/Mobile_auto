import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PushNotifications, PushNotificationSchema, RegistrationError, ActionPerformed } from '@capacitor/push-notifications';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  nom:any;
  prenom:any;
  mdp:any;
  validation:any;
  email:any;
  token:any;
  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
  }

  ngOnInit() {
    this.addListeners();
  }
//...............

addListeners = async () =>{
  await PushNotifications.addListener('registration',token=>{
    alert('Registration token :'+token.value);
    this.token = token.value;
  });
  await PushNotifications.addListener('registrationError',err=>{
    alert('Registration err :'+err.error);
  });
  await PushNotifications.addListener('pushNotificationReceived',notification=>{
    alert('Notif recu :'+JSON.stringify(notification));
  });
  await PushNotifications.addListener('pushNotificationActionPerformed',notification=>{
    alert('Push notification action performed'+ notification.actionId+notification)
  });
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
getDeliveredNotifications = async() => {
  const notificationList = await PushNotifications.getDeliveredNotifications();
  alert('delivered notifications' + JSON.stringify(notificationList));
}
generateToken() {
  PushNotifications.checkPermissions().then(result => {
    if (result.receive == 'granted') {
      console.log('Register');
      PushNotifications.register();

      PushNotifications.addListener('registration', (token) => {
        console.log('Token ' + token.value);
        const deviceToken = token.value;
        this.sendTokenToServer(deviceToken);
      });

      PushNotifications.addListener('registrationError', (error: RegistrationError) => {
        console.error('Error on registration: ' + JSON.stringify(error));
      });

      PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
        this.handleIncomingNotification(notification);
      });

      PushNotifications.addListener('pushNotificationActionPerformed', (action: ActionPerformed) => {
        this.handleNotificationAction(action);
      });
    }
  });
}

async sendTokenToServer(deviceToken: string) {
  try {
    const response = await fetch('http://192.168.21.172:8080/registerDeviceToken/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deviceToken }),
    });

    if (response.ok) {
      console.log('Device token sent successfully');
    } else {
      console.error('Failed to send device token to the server');
    }
  } catch (error) {
    console.error('Error sending device token:', error);
  }
}

handleIncomingNotification(notification: PushNotificationSchema) {
  // Votre logique pour gérer les notifications reçues
  console.log('Received notification:', notification);
}

handleNotificationAction(action: ActionPerformed) {
  // Votre logique pour gérer les actions des notifications
  console.log('Notification action performed:', action);
}
//...............
  async onSubmit() {
    this.authService.inscription(this.nom,this.prenom,this.email,this.mdp,this.validation,this.token);
  }

}
