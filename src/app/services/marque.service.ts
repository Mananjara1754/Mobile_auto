import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  marques:any[] = [];

  constructor(private httpClient: HttpClient) {}
  async get_all_marque(): Promise<any[]> {
    const url = 'https://devvoitures5backend-production.up.railway.app/marque';
    try {
      const response: any = await this.httpClient.get(url).toPromise();
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des marques', error);
      return [];
    }
  }

}
