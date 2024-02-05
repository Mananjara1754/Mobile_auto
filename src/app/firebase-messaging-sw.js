importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js');
alert("tonga tato");
var firebaseConfig ={
  apiKey: 'AIzaSyDVyOXzMFfyOvlVNrxW2aIhFEgcO-YGluE',
  authDomain: 'notification-cloud-s5.firebaseapp.com',
  projectId: 'notification-cloud-s5',
  storageBucket: 'notification-cloud-s5.appspot.com',
  messagingSenderId: '1091105700339',
  appId: '1:1091105700339:web:400359e471ef15dfe57a86'
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});