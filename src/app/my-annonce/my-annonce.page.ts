import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { LoadingService } from '../services/loading.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-annonce',
  templateUrl: './my-annonce.page.html',
  styleUrls: ['./my-annonce.page.scss'],
})
export class MyAnnoncePage implements OnInit {
  annonces:any[]=[];
  constructor(private router : Router,private loadingController:LoadingController,private loadingService:LoadingService,private annonceService:AnnonceService) { }

  async ngOnInit() {
    await this.showLoading();
    this.get_my_annonce();
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      duration: 2500, // Facultatif - durée en millisecondes, ajustez selon vos besoins
    });
    await loading.present();
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
      await this.annonceService.vendu(idAnnonce);
    } catch (error) {
      console.error("Tsy mety vendu",error);
    }
  }
  async supprimer(idAnnonce:any){
    try {
      await this.annonceService.supprimer(idAnnonce);
    } catch (error) {
      console.error("Tsy mety vendu",error);
    }
  }
   
  async vers_detail(value:any){
    await this.showLoading();
    this.router.navigate(['/details'], {
      queryParams: {value: value}
    });
  }
}
