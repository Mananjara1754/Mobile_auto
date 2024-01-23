import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';
import { FavoriService } from '../services/favori.service';
import { BehaviorSubject } from 'rxjs';
import { VariableService } from '../services/variable.service';
import { AlertController, RefresherEventDetail } from '@ionic/angular';
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
  recherche_value: string = '';

  constructor(private alertController: AlertController,private loadingService: LoadingService,private variableService:VariableService,private router : Router,private favoriService:FavoriService,private marqueService:MarqueService,private annonceService:AnnonceService) {
    
  }
//https://github.com/hasinjara/dev_voiture_s5_backend/tree/main/src/main/java/com/demo/voiture/controller
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

  async isFavori2(annonce: any): Promise<void> {
    try {
      console.log('id Annonce'+annonce.details.idAnnonce);
      annonce.favoriStatus = await this.favoriService.isFavori2(annonce.details.idAnnonce, this.favoris);
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris', error);
      annonce.favoriStatus = false; // Définissez la valeur par défaut en cas d'erreur
    }
  }

  
  ngOnInit() {
    this.all_marque();
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
        console.log(this.favoris);
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris', error);
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
  
  vers_detail(value:any){
    this.router.navigate(['/details'], {
      queryParams: { value: value }
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