import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';
import { FavoriService } from '../services/favori.service';
import { LoadingService } from '../services/loading.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-annonce',
  templateUrl: './all-annonce.page.html',
  styleUrls: ['./all-annonce.page.scss'],
})
export class AllAnnoncePage implements OnInit {
  etatIcone = 'heart-outline';
  couleurIcone = 'black';
  annonces:any[]=[];
  favoris:any[]=[];
  recherche_value:any;

  constructor(private router:Router,private loadingController:LoadingController,private loadingService:LoadingService,private annonceService:AnnonceService,private favoriService:FavoriService) { }

  async ngOnInit() {
    await this.showLoading();
    this.all_favori();
    this.all_annonce();
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      duration: 2500, // Facultatif - durée en millisecondes, ajustez selon vos besoins
    });
    await loading.present();
  }
  async vers_detail(value:any){
    await this.showLoading();
    this.router.navigate(['/details'], {
      queryParams: {value: value}
    });
  }
  async all_favori() {
    try {
        this.favoris = await this.favoriService.get_all_favori();
        console.log(this.favoris);
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris', error);
    }
  }
  async onSearchInput(event: any) {
    this.recherche_value = event.target.value;
    this.annonces = await this.annonceService.recherche(this.recherche_value);
  }
  doRefresh(event:any) {
    this.loadingService.present();
    this.ngOnInit();
    event.target.complete();
    this.loadingService.dismiss();
  }
  async onClickIcone(annonce: any,okey:boolean) {
    try {
     if(okey == true){
      this.favoriService.delete_favori(annonce);
     }else{
      this.favoriService.insert_favori(annonce);
     }
    } catch (error) {
      console.error('Erreur lors de la gestion des favoris', error);
    }
    
  }

  async all_annonce() {
    try {
      this.annonces = await this.annonceService.get_all_annonce();
      // Initialisez la propriété favoriStatus pour chaque annonce
      this.annonces.forEach(annonce => this.isFavori2(annonce));
      console.log(this.annonces);
    } catch (error) {
      console.error('Erreur lors de la récupération des annonces', error);
    }
  }
  async isFavori2(annonce: any): Promise<void> {
    try {
      console.log('id Annonce'+annonce.details.idAnnonce);
      annonce.favoriStatus = await this.favoriService.isFavori2(annonce.details.idAnnonce, this.favoris);
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris', error);
      annonce.favoriStatus = false; // Définissez la valeur par défaut en cas d'erreur
    }
  }
}
