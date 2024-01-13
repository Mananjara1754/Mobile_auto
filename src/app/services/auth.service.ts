import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController, AlertController  } from '@ionic/angular';
import { ExceptionCode } from '@capacitor/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://devvoitures5backend-production.up.railway.app/register';
  constructor(private router: Router,private http: HttpClient,private loadingController: LoadingController, private alertController: AlertController) {
  }
  //login(email:string,mdp:string){
    async login(email:string,mdp:string) {
      const url = "https://devvoitures5backend-production.up.railway.app/register/signin";
      const body = {
        "mail": email,
        "mdp": mdp
      };
    
      // Affichez l'indicateur de chargement
      const loading = await this.loadingController.create({
        // message: '',
        duration: 5000 // Optionnel : spécifiez une durée maximale pour l'indicateur de chargement
      });
      await loading.present();
    
      // Définissez les en-têtes si nécessaire
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
        // ... autres en-têtes si nécessaire
      });
    
      try {
        // Effectuez la requête POST avec le corps et les en-têtes définis
        const data: any = await this.http.post(url, body, { headers }).toPromise();
        console.log('Réponse JSON : ', data);
    
        // Masquez l'indicateur de chargement une fois la réponse reçue
        await loading.dismiss();
    
        // Récupérez la valeur de la propriété "error" dans data
        const errorValue = data.error;
        console.log('Valeur de la propriété "error" : ', errorValue);
    
        if (errorValue !== 'aucun') {
          // Affichez une alerte d'error en rouge
          const alert = await this.alertController.create({
            header: 'Erreur',
            message: errorValue,
            buttons: ['OK'],
            cssClass: 'alert-danger' // Ajoutez une classe CSS pour personnaliser le style de l'alerte
          });       
          await alert.present();
          throw new Error('Erreur personnalisée pour entrer dans le bloc catch.');
        }
        console.log("jfdhikokokoko");
        localStorage.setItem('token', JSON.stringify(data));
        // Redirection vers la page '/ma-page'
        this.router.navigate(['/accueil']);

    
      } catch (error) {
        console.error('Erreur : ', error);
    
        // Masquez l'indicateur de chargement en cas d'erreur
        await loading.dismiss();
      }
    }
    

  // async init() {
  //   await this.storage.create();
  // }

  // login(email: string, password: string){
  //   const body = {
  //     mail: email,
  //     mdp: password
  //   };

  //   return this.http.post(`${this.apiUrl}/signin`, body);
  // }

  // saveTokenToStorage(token: string) {
  //   this.storage.set('authToken', token);
  // }

  // getTokenFromStorage() {
  //   return this.storage.get('authToken');
  // }
  
}
