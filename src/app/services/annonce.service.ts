import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VariableService } from './variable.service';
import axios from 'axios';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private router: Router,private loadingController: LoadingController,private variableService:VariableService,private httpClient: HttpClient) {}
  async supprimer(id_annonce: any) {
    const loading = await this.loadingController.create();
    try {
      await loading.present();
      const url = this.variableService.nom_domaine + "/annonce/" + id_annonce;
      const body = {
        "idAnnonce": id_annonce
      };
      const token = this.variableService.getToken();
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        headers: headers,
        body: body  // Ajouter le corps de la requête
      };
      const data: any = await this.httpClient.delete(url,options).toPromise();
      await loading.dismiss();
      const errorValue = data.error;
      console.log('Valeur de la propriété "error" : ', errorValue);
      console.log("Success");
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur : ', error);
    }
  }
  async vendu(id_annonce: any) {
    const loading = await this.loadingController.create();
    try {
      await loading.present();
      const url = this.variableService.nom_domaine + "/annonce/vendre/" + id_annonce;
      const body = {
        "idAnnonce": id_annonce
      };
      const token = this.variableService.getToken();
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const options = {
        headers: headers,
        body: body  // Ajouter le corps de la requête
      };
      const data: any = await this.httpClient.put(url, null, options).toPromise();
      await loading.dismiss();
      const errorValue = data.error;
      console.log('Valeur de la propriété "error" : ', errorValue);
      console.log("Success");
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur : ', error);
    }
  }
  
  async get_annonce_by_id(idAnnonce:any): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/annonce/'+idAnnonce;
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des annonceby id', error);
      return [];
    }
  }
 
  async envoyerFormData(formData: FormData):Promise<any> {
      const loading = await this.loadingController.create();
      await loading.present(); 
      try{
        const url = this.variableService.nom_domaine+'/annonce';
        const token=this.variableService.getToken();
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
      const formDataObject: any = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      for (const key in formDataObject) {
        if (formDataObject.hasOwnProperty(key)) {
          console.log(key, formDataObject[key]);
        }
      }
      const data: any = await this.httpClient.post(url, formData, { headers }).toPromise();
      await loading.dismiss();
      const errorValue = data.error;
      console.log('Valeur de la propriété "error" : ', errorValue);
      this.router.navigate(['/accueil']);
    }catch(error){
      await loading.dismiss();
      console.error('Erreur : ', error);
    }
  }

  async recherche(mot_cle:any): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/annonce/search/'+mot_cle;
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des recherches', error);
      return [];
    }
  }
  
  async get_all_categorie(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/voiture_categorie';
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      await loading.dismiss();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur lors de la récupération des categories par', error);
      return [];
    }
  }

  async get_all_fiche(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/voiture/fiche_tech';
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des fiche tech', error);
      return [];
    }
  }

  async get_all_voiture(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/voiture/marque';
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      await loading.dismiss();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur lors de la récupération des voitures par', error);
      return [];
    }
  }
  async get_all_annonce(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/annonce/valider';
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      console.log("kkokok");
      const headers = this.variableService.getHeaderToken();
      //console.log(headers);
      const response: any = await this.httpClient.get(url,{headers}).toPromise();
      await loading.dismiss();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      this.variableService.checkError(error);
      console.error('Erreur lors de la récupération des annonces', error);
      await loading.dismiss();
      return [];
  }
  }
  async get_all_annonce_min(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/annonce/min';
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      console.log("kkokok");
      const headers = this.variableService.getHeaderToken();
      const response: any = await this.httpClient.get(url,{headers}).toPromise();
      await loading.dismiss();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      this.variableService.checkError(error);
      console.error('Erreur lors de la récupération des annonces', error);
      await loading.dismiss();
      return [];
  }
  }
  async get_all_my_annonce(): Promise<any[]> {
      const url = this.variableService.nom_domaine+'/annonce/users';
      try {
        console.log("kkokok");
        const headers = this.variableService.getHeaderToken();
        const response: any = await this.httpClient.get(url,{headers}).toPromise();
        
        if (response && response.data) {
          return response.data;
        } else {
          return [];
        }
      } catch (error) {
        this.variableService.checkError(error);
        console.error('Erreur lors de la récupération des my annonces', error);
        return [];
    }
  }
}
