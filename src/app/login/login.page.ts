import { Component, OnInit ,ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonRefresher } from '@ionic/angular';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { PushNotifications, PushNotificationSchema, RegistrationError, ActionPerformed } from '@capacitor/push-notifications';
import { FcmService } from '../services/fcm.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup;
  email:any;
  mdp:any;
  erreur:any;
  responseData: any;

  constructor(private afMessaging: AngularFireMessaging,private fcmService: FcmService,private authService: AuthService,private formBuilder: FormBuilder) {
    // this.afMessaging.requestToken.subscribe(
    //   (token) => {
    //     console.log('FCM Token:', token);
    //   },
    //   (error) => {
    //     console.error('Unable to get FCM token:', error);
    //   }
    // );
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const mdp = this.loginForm.value.mdp;
    console.log(email);
    console.log(mdp);
    this.authService.login(email,mdp);
  }
  

  ngOnInit() {
    //this.requestFcmPermission();
    // this.generateToken();
     this.addListeners();
    // this.registerPushNotifications();
    // this.fcmService.receiveMessages().subscribe((message) => {
    //   console.log('Received message:', message);
    // });
  }
  // requestFcmPermission() {
  //   this.fcmService.requestPermission().subscribe(
  //     (token: any) => {
  //       // You can handle the token here if needed, but it's already logged in FcmService
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
  // registerPushNotifications() {
  //   this.fcmService.requestPermission().subscribe(
  //     (token) => {
  //       console.log('FCM Token:', token);
  //     },
  //     (error) => {
  //       console.error('Error getting FCM token:', error);
  //     }
  //   );
  // }

  // getDeliveredNotifications() {
  //   // Implement logic to get delivered notifications if needed
  // }

  addListeners = async () =>{
    await PushNotifications.addListener('registration',token=>{
      alert('Registration token :'+token.value);
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
}


