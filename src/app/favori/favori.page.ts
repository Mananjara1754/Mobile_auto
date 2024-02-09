import { Component, OnInit } from '@angular/core';
import { FavoriService } from '../services/favori.service';
import { LoadingService } from '../services/loading.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favori',
  templateUrl: './favori.page.html',
  styleUrls: ['./favori.page.scss'],
})
export class FavoriPage implements OnInit {
  favoris:any[]=[];
  idUser:any;
  constructor(private router:Router,private loadingController:LoadingController,private loadingService: LoadingService,private favoriService:FavoriService) { }
  doRefresh(event:any) {
    this.loadingService.present();
    this.ngOnInit();
    event.target.complete();
    this.loadingService.dismiss();
  }
  async deleteFavori(annonce:any){
    try {
      await this.favoriService.delete_favori(annonce);
    } catch (error) {
      alert("erreur lors de la suppression de l\' annonce");
    }
  }
  async vers_detail(value:any){
    await this.showLoading();
    this.router.navigate(['/details'], {
      queryParams: {value: value}
    });
  }
  
  async showLoading() {
    const loading = await this.loadingController.create({
      duration: 2500, // Facultatif - durée en millisecondes, ajustez selon vos besoins
    });
    await loading.present();
  }
  async ngOnInit() {
    //await this.showLoading();
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
