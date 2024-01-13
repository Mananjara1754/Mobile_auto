import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private httpClient: HttpClient) {}

  async get_all_annonce(): Promise<any[]> {
    const url = 'https://devvoitures5backend-production.up.railway.app/annonce';
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces', error);
      return [];
    }
  }
}
