import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController, AlertController  } from '@ionic/angular';
import { ExceptionCode } from '@capacitor/core';
import { Router } from '@angular/router';
import { VariableService } from './variable.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private variableServcie:VariableService,private router: Router,private http: HttpClient,private loadingController: LoadingController, private alertController: AlertController) {
  }
    async login(email:string,mdp:string,token:string) {
      const url = this.variableServcie.nom_domaine+"/register/signin";
      const body = {
        "mail": email,
        "mdp": mdp,
        "firebase_token":token
      };
      const loading = await this.loadingController.create();
      await loading.present();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      try {
        const data: any = await this.http.post(url, body, { headers }).toPromise();
        console.log('Réponse JSON : ', data);
        await loading.dismiss();
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
          throw new Error('Erreur pour entrer dans le bloc catch.');
        }
        console.log("jfdhikokokoko");
        localStorage.setItem('token', JSON.stringify(data));
        // Redirection vers la page '/ma-page'
        this.router.navigate(['/accueil']);
      } catch (error) {
        console.error('Erreur : ', error);
        await loading.dismiss();
      }
    }
    async inscription(nom:string,prenom:string,email:string,mdp:string,validation:string,firebase_token:any) {
      try{
        if (mdp !== validation) {
          const alert = await this.alertController.create({
            header: 'Erreur',
            message: 'Erreur lors de la confiramtion du mot de passe',
            buttons: ['OK'],
            cssClass: 'alert-danger' // Ajoutez une classe CSS pour personnaliser le style de l'alerte
          });       
          await alert.present();
          throw new Error('Erreur pour entrer dans le bloc catch.');
        }
        const url = this.variableServcie.nom_domaine+"/register/signup";
        const body = {
          "nom": nom,
          "prenom": prenom,
          "mail": email,
          "mdp": mdp,
          "firebase_token": firebase_token
        };
        const loading = await this.loadingController.create({
          duration: 5000 // Optionnel : spécifiez une durée maximale pour l'indicateur de chargement
        });
        await loading.present();
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        try {
          const data: any = await this.http.post(url, body, { headers }).toPromise();
          await loading.dismiss();
          const errorValue = data.error;
          console.log('Valeur de la propriété "error" : ', errorValue);
          if (errorValue !== 'aucun') {
            const alert = await this.alertController.create({
              header: 'Erreur',
              message: errorValue,
              buttons: ['OK'],
              cssClass: 'alert-danger' // Ajoutez une classe CSS pour personnaliser le style de l'alerte
            });       
            await alert.present();
            throw new Error('Erreur pour entrer dans le bloc catch.');
          }
          this.router.navigate(['/login']);
        } catch (error) {
          console.error('Erreur : ', error);
          await loading.dismiss();
        }
      }catch(error){
        console.error('Erreur : ', error);
      }
      
    }
}
