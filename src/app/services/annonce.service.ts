import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { VariableService } from './variable.service';
import axios from 'axios';
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

async xenvoyerFormData(formData: FormData): Promise<any> {
  try {
    const url = this.variableService.nom_domaine + '/annonce';
    const token = this.variableService.getToken();

    // Configurez les en-têtes nécessaires, par exemple, le type de contenu et l'autorisation
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    };
  // Convertir FormData en objet JavaScript
  const formDataObject: any = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Afficher les éléments de l'objet
  for (const key in formDataObject) {
    if (formDataObject.hasOwnProperty(key)) {
      console.log(key, formDataObject[key]);
    }
  }
    // Utilisez Axios pour effectuer la requête POST
    const response = await axios.post(url, formData, { headers });

    // Traitez la réponse
    console.log('Réponse de l\'API : ', response.data);

  } catch (error) {
    console.error('Erreur : ', error);
  }
}
  async xxenvoyerFormData(formData: FormData): Promise<any> {
    try {
      const url = this.variableService.nom_domaine + '/annonce';
      const token = this.variableService.getToken();
  
      // Créez une nouvelle instance de XMLHttpRequest
      const xhr = new XMLHttpRequest();
  
      // Configurez la requête
      xhr.open('POST', url, true);
      
      // Ajoutez les en-têtes nécessaires, par exemple, le type de contenu et l'autorisation
      xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
  
      // Configurez une fonction de rappel pour gérer la réponse de la requête
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
            console.log('Réponse de l\'API : ', responseData);
          } else {
            console.error('Erreur de la requête : ', xhr.status, xhr.statusText);
          }
        }
      };
  
      // Envoyez la requête avec le FormData en tant que corps
      xhr.send(formData);
  
    } catch (error) {
      console.error('Erreur : ', error);
    }
  }
  
  async envoyerFormData(formData: FormData):Promise<any> {

    try{

      const url = this.variableService.nom_domaine+'/annonce';
      const token=this.variableService.getToken();
      // 'Content-Type': 'multipart/form-data',

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });        
       // Convertir FormData en objet JavaScript
    const formDataObject: any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Afficher les éléments de l'objet
    for (const key in formDataObject) {
      if (formDataObject.hasOwnProperty(key)) {
        console.log(key, formDataObject[key]);
      }
    }

      const data: any = await this.httpClient.post(url, formData, { headers }).toPromise();
      const errorValue = data.error;
      console.log('Valeur de la propriété "error" : ', errorValue);
      // this.router.navigate(['/login']);
    }catch(error){
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
