import { Component, OnInit } from '@angular/core';
import { FavoriService } from '../services/favori.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage implements OnInit {
  favoris:any[]=[];
  idUser:any;
  constructor(private loadingService: LoadingService,private favoriService:FavoriService) { }
  doRefresh(event:any) {
    this.loadingService.present();
    this.ngOnInit();
    event.target.complete();
    this.loadingService.dismiss();
  }
   
  ngOnInit() {
    this.all_fav();
  }
  async all_fav() {
    try {
      this.favoris = await this.favoriService.get_all_favori();
    } catch (error) {
        console.error('Erreur lors de la récupération des marques', error);
    }
  }
  
}
