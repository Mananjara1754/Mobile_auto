import { Component, OnInit } from '@angular/core';
import { FavoriService } from '../services/favori.service';
import { LoadingService } from '../services/loading.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage implements OnInit {
  favoris:any[]=[];
  idUser:any;
  constructor(private loadingController:LoadingController,private loadingService: LoadingService,private favoriService:FavoriService) { }
  doRefresh(event:any) {
    this.loadingService.present();
    this.ngOnInit();
    event.target.complete();
    this.loadingService.dismiss();
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      duration: 2500, // Facultatif - durée en millisecondes, ajustez selon vos besoins
    });
    await loading.present();
  }
  async ngOnInit() {
    await this.showLoading();
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
