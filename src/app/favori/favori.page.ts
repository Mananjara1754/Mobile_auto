import { Component, OnInit } from '@angular/core';
import { FavoriService } from '../services/favori.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage implements OnInit {
  favoris:any[]=[];
  idUser:any;
  constructor(private favoriService:FavoriService) { }

  ngOnInit() {
    this.all_marque();
  }
  async all_marque() {
    try {
      this.favoris = await this.favoriService.get_all_favori();
    } catch (error) {
        console.error('Erreur lors de la récupération des marques', error);
    }
  }
  
}
