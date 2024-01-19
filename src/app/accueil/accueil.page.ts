import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';
import { FavoriService } from '../services/favori.service';
import { BehaviorSubject } from 'rxjs';
import { VariableService } from '../services/variable.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})

export class AccueilPage implements OnInit {
  marques:any[]=[];
  annonces:any[]=[];
  favoris:any[]=[];
  // favorisSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

   selectedReaction: string | null = null;

  constructor(private variableService:VariableService,private router : Router,private favoriService:FavoriService,private marqueService:MarqueService,private annonceService:AnnonceService) {
    this.all_marque();
    this.all_annonce();
     this.all_favori();
  }
  async onClickIcone(annonce: any,okey:boolean) {
    try {
     alert(okey);
     if(okey == true){
      this.favoriService.delete_favori(annonce);
     }else{
      this.favoriService.insert_favori(annonce);
     }
    } catch (error) {
      console.error('Erreur lors de la gestion des favoris', error);
    }
  }
  // async isFavori2(idAnnonce: string): Promise<boolean> {
  //   try {
  //     const idUsers = this.variableService.getidUser();
  //     return this.favoris.some((favori) => favori.idAnnonce === idAnnonce && favori.idUsers === idUsers);
  //   } catch (error) {
  //     console.error('Erreur lors de la vérification des favoris', error);
  //   }
  //   return false;
  // }
  async isFavori2(annonce: any): Promise<void> {
    try {
      const idUsers = this.variableService.getidUser();
      annonce.favoriStatus = await this.favoriService.isFavori2(annonce.details.idAnnonce, this.favoris);
    } catch (error) {
      console.error('Erreur lors de la vérification des favoris', error);
      annonce.favoriStatus = false; // Définissez la valeur par défaut en cas d'erreur
    }
  }
  
  // async onClickIcone(idAnnonce:any) {
  //   try {
  //     await this.favoriService.insert_favori(idAnnonce);
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des marques', error);
  //   }
  //  }
   
  //  async estDansFavoris(idAnnonce: any): Promise<boolean> {
  //   const isFavori = await this.favoriService.isFavori2(idAnnonce,this.favoris);
  //   return isFavori;
  // }
 
  
  ngOnInit() {

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
  
  // async all_annonce() {
  //   try {
  //       this.annonces = await this.annonceService.get_all_annonce();
  //       console.log(this.annonces);
  //   } catch (error) {
  //       console.error('Erreur lors de la récupération des annonces', error);
  //   }
  // }
  vers_detail(value:any){
    this.router.navigate(['/joueur'], {
      queryParams: { value: value }
    });
  }
  
  getAllCategorie() {
    
  }
  getAllAnnonce() {
    
  }


  fetchAndStoreAnnoncesValides() {
    
  }

  fetchAndDisplayAnnoncesDetails() {

  }

  
  add(){

  }

  utilisateurEstAdmin(): boolean {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur === '-NcDbrsib9wadoqfeYke';
  }
  deconnecter() {
    localStorage.removeItem('utilisateur');
    localStorage.clear();
    this.router.navigate(['/debut']);
  }

  validerAnnonce(keyAnnonce: string){
    const dateAujourdhui = new Date().toISOString();

    const donneesAnnonce = {
      annonceKey : keyAnnonce,
      dateValidation : dateAujourdhui
    };
  }
  
}