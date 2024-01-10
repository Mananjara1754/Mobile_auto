import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {

  id_equipe:any;
  equipe:any[] = [];
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
  constructor(private router : Router,) {
      this.getAllEquipe();
  }
  vers_detail(value:any){
    this.router.navigate(['/joueur'], {
      queryParams: { value: value }
    });
  }
  getAllEquipe(){
    this.equipe = [
      {id_equipe:'1',nom_equipe:'bulls',image:''},
      {id_equipe:'1',nom_equipe:'Nets',image:''},
      {id_equipe:'1',nom_equipe:'Celtics',image:''}
    ];
  }
  getAllCategorie() {
    
  }
  getAllAnnonce() {
    
  }


  fetchAndStoreAnnoncesValides() {
    
  }

  fetchAndDisplayAnnoncesDetails() {

  }

  ngOnInit() {
  }
  add(){
    

  }
  utilisateurExisteDansLocalStorage(): boolean {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur !== null;
  }
  utilisateurEstAdmin(): boolean {
    const utilisateur = localStorage.getItem('utilisateur');
    return utilisateur === '-NcDbrsib9wadoqfeYke';
  }
  deconnecter() {
    localStorage.removeItem('utilisateur');
  }

  validerAnnonce(keyAnnonce: string){
    const dateAujourdhui = new Date().toISOString();

    const donneesAnnonce = {
      annonceKey : keyAnnonce,
      dateValidation : dateAujourdhui
    };
  }
  
}