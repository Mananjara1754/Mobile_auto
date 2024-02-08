import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';
import { FavoriService } from '../services/favori.service';
import { BehaviorSubject } from 'rxjs';
import { VariableService } from '../services/variable.service';
import { AlertController, LoadingController, NavController, RefresherEventDetail } from '@ionic/angular';
import { IonRefresherContent } from '@ionic/angular';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})

export class AccueilPage implements OnInit {
  marques:any[]=[];
  annonces:any[]=[];
  favoris:any[]=[];
  recemment:any[]=[];
  recherche_value: string = '';

  constructor( private loadingController: LoadingController,private alertController: AlertController,private loadingService: LoadingService,private variableService:VariableService,private router : Router,private favoriService:FavoriService,private marqueService:MarqueService,private annonceService:AnnonceService) {
    
  }
//https://github.com/hasinjara/dev_voiture_s5_backend/tree/main/src/main/java/com/demo/voiture/controller
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
   
  async onClickIcone(annonce: any,okey:boolean) {
    try {
     if(okey == true){
      annonce.favoriStatus = false;
      this.favoriService.delete_favori(annonce.details.idAnnonce);
     }else{
      annonce.favoriStatus = true;
      this.favoriService.insert_favori(annonce.details.idAnnonce);
     }
    } catch (error) {
      console.error('Erreur lors de la gestion des favoris', error);
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

  
  async ngOnInit() {
    this.all_marque();
    this.all_recemment();
    this.all_annonce();
    this.all_favori();
  }
  
  async all_marque() {
    try {
        this.marques = await this.marqueService.get_all_marque();
        console.log(this.marques);
    } catch (error) {
        console.error('Erreur lors de la récupération des marques', error);
    }
  }
  async all_favori() {
    try {
        this.favoris = await this.favoriService.get_all_favori();
        console.log("Voici les favoris : ");
        console.log(this.favoris);
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris', error);
    }
  }

  async all_recemment() {
    try {
      this.recemment = await this.annonceService.get_all_annonce();
      // Initialisez la propriété favoriStatus pour chaque annonce
      this.recemment.forEach(annonce => this.isFavori2(annonce));
      console.log(this.recemment);
    } catch (error) {
      console.error('Erreur lors de la récupération des recemments ajoute', error);
    }
  }

  async all_annonce() {
    const loading = await this.loadingController.create();
    try {
      await loading.present();
      this.annonces = await this.annonceService.get_all_annonce_min();
      this.annonces.forEach(annonce => this.isFavori2(annonce));
      console.log("Voila Les annonces avec favori ");
      console.log(this.annonces);
      await loading.dismiss();
    } catch (error) {
      await loading.dismiss();
      console.error('Erreur lors de la récupération des annonces', error);
    }
  }
  
  async vers_detail(value:any){
    await this.showLoading();
    this.router.navigate(['/details'], {
      queryParams: {value: value}
    });
  }
  
  deconnecter() {
   this.variableService.deconnecter();
  }

  validerAnnonce(keyAnnonce: string){
    const dateAujourdhui = new Date().toISOString();

    const donneesAnnonce = {
      annonceKey : keyAnnonce,
      dateValidation : dateAujourdhui
    };
  }
  
}