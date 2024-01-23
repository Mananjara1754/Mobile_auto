import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VariableService } from './variable.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private variableService:VariableService,private httpClient: HttpClient) {}
    async vendu(id_annonce:any) {
      try {
        const url = this.variableService.nom_domaine+"/annonce/vendre/"+id_annonce;
        const headers = this.variableService.getHeaderToken();
        const data: any = await this.httpClient.put(url,{headers}).toPromise();
        const errorValue = data.error;
        console.log('Valeur de la propriété "error" : ', errorValue);
        console.log("Success");
      } catch (error) {
        console.error('Erreur : ', error);
      }
  }
  envoyerFormData(formData: any) {
    const url = this.variableService.nom_domaine+'/voiture_categorie';
    const token=this.variableService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post(url, formData, { headers });
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
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
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
    alert(url);
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des voitures par', error);
      return [];
    }
  }
  async get_all_annonce(): Promise<any[]> {
    const url = this.variableService.nom_domaine+'/annonce/valider';
    try {
      console.log("kkokok");
      const headers = this.variableService.getHeaderToken();
      //console.log(headers);
      const response: any = await this.httpClient.get(url,{headers}).toPromise();
      
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      this.variableService.checkError(error);
      console.error('Erreur lors de la récupération des annonces', error);
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
