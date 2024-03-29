import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariableService } from './variable.service';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class FavoriService {

  constructor(private loadingController: LoadingController,private variableService:VariableService,private httpClient: HttpClient) { }

  async get_all_favori(): Promise<any[]> {
    // const idUser = this.variableService.getidUser();
    const url = this.variableService.nom_domaine+'/favoris_user_annonce';
    const loading = await this.loadingController.create();
    await loading.present();
    try {
      const headers = this.variableService.getHeaderToken();
      const response: any = await this.httpClient.get(url,{headers}).toPromise();
      await loading.dismiss();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur lors de la récupération des favoris', error);
    }
    return [];
  }
  // async isFavori(idAnnonce: string): Promise<boolean> {
  //   try {
  //     const idUsers = this.variableService.getidUser();
  //     const favoris = await this.get_all_favori(); // Supposons que idUsers soit l'identifiant de l'utilisateur
  //     return favoris.some((favori) => favori.idAnnonce === idAnnonce && favori.idUsers === idUsers);
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification des favoris', error);
  //     return false;
  //   }
  // }
  async isFavori(idAnnonce: string): Promise<boolean> {
    try {
      const idUsers = this.variableService.getidUser();
      const favoris = await this.get_all_favori();
      return favoris.some((favori) => favori.idAnnonce === idAnnonce && favori.idUsers === idUsers);
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris', error);
    }
    return false;
  }
  
  async isFavori2(idAnnonce: string,favoris:any[]): Promise<boolean> {
    try {
      for (let i=0;i<favoris.length;i++) {
        console.log("huhu");
        if(favoris[i].details.idAnnonce === idAnnonce){
          return true;
        }
      }
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris', error);
    }
    return false;
  }
  
  async insert_favori(id_annonce:any) {
      try {
        const url = this.variableService.nom_domaine+"/favoris_user_annonce";
        const body = {
          "idAnnonce": id_annonce,
        }
        const headers = this.variableService.getHeaderToken();
        const data: any = await this.httpClient.post(url,body,{headers}).toPromise();
        const errorValue = data.error;
        console.log('Valeur de la propriété "error" : ', errorValue);
        console.log("Success");
      } catch (error) {
        console.error('Erreur : ', error);
      }
  }
  async delete_favori(id_annonce:any) {
    try {
      const url = this.variableService.nom_domaine+"/favoris_user_annonce";
      const body = {
        "idAnnonce": id_annonce
      }
      const headers = this.variableService.getHeaderToken();
      const options = {
        headers: headers,
        body: body  
      };
      const data: any = await this.httpClient.delete(url,options).toPromise();
      const errorValue = data.error;
      console.log('Valeur de la propriété "error" : ', errorValue);
      console.log("Success");
    } catch (error) {
      console.error('Erreur : ', error);
    }
}
}
