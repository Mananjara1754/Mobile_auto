import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {
  idMarque:any;
  idVoiture:any;
  ficheChoisi:any;
  kilometrage:any;
  etat:any;
  description:any;
  prix_vente:any;
  marques:any[]=[];
  voitures:any[]=[];
  ficheTechniques:any[]=[];

  constructor(private marqueService:MarqueService,private annonceService:AnnonceService) {
    this.all_marque();
    this.get_all_voiture();
    this.all_fiche();
  }
  insertAnnonce(){
    console.log(this.idMarque); 
    console.log(this.idVoiture); 
    console.log(this.ficheChoisi); 
    console.log(this.kilometrage); 
    console.log(this.etat); 
    console.log(this.description); 
    console.log(this.prix_vente); 
  }
  ngOnInit() {
  }
  async all_fiche() {
    try {
        this.ficheTechniques= await this.annonceService.get_all_fiche();
        console.log(this.ficheTechniques);
    } catch (error) {
        console.error('Erreur lors de la récupération des erreur recup fiche tech', error);
    }
  }

  async all_marque() {
    try {
        this.marques = await this.marqueService.get_all_marque();
        console.log(this.marques);
    } catch (error) {
        console.error('Erreur lors de la récupération des marques', error);
    }
  }
  async get_all_voiture() {
    try {
        this.voitures = await this.annonceService.get_all_voiture();
        console.log(this.voitures);
    } catch (error) {
        console.error('Erreur lors de la récupération des voitures by marques', error);
    }
  }

}
