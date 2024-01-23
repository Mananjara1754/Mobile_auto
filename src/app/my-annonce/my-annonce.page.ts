import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-my-annonce',
  templateUrl: './my-annonce.page.html',
  styleUrls: ['./my-annonce.page.scss'],
})
export class MyAnnoncePage implements OnInit {
  annonces:any[]=[];
  constructor(private loadingService:LoadingService,private annonceService:AnnonceService) { }

  ngOnInit() {
    this.get_my_annonce();
  }
  doRefresh(event:any) {
    this.loadingService.present();
    this.ngOnInit();
    event.target.complete();
    this.loadingService.dismiss();
  }
  async get_my_annonce(){
    try {
      this.annonces = await this.annonceService.get_all_my_annonce();
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces', error);
    }
  }
  async vendu(idAnnonce:any){
    try {
      this.annonceService.vendu(idAnnonce);
    } catch (error) {
      console.error("Tsy mety vendu",error);
    }
  }
}
