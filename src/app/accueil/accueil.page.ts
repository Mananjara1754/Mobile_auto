import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})

export class AccueilPage implements OnInit {
  id_equipe:any;
  marques:any[]=[];
  annonces:any[]=[];
   // Définissez l'état initial de l'icône et de la couleur
   etatIcone = 'heart-outline';
   couleurIcone = 'black';
   // Fonction appelée lors du clic sur l'icône

   onClickIcone() {
     // Inversez l'état de l'icône
     this.etatIcone = (this.etatIcone === 'heart-outline') ? 'heart' : 'heart-outline';
     
     // Changez la couleur en rouge lorsque l'icône est pleine, sinon en noir
     this.couleurIcone = (this.etatIcone === 'heart') ? 'red' : 'black';
   }
  constructor(private router : Router,private marqueService:MarqueService,private annonceService:AnnonceService) {}
  ngOnInit() {
    this.all_marque();
    this.all_annonce();
  }
  async all_marque() {
    try {
        this.marques = await this.marqueService.get_all_marque();
        console.log(this.marques);
    } catch (error) {
        console.error('Erreur lors de la récupération des marques', error);
    }
  }
  async all_annonce() {
    try {
        this.annonces = await this.annonceService.get_all_annonce();
        console.log(this.annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces', error);
    }
  }
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