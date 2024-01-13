import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-all-annonce',
  templateUrl: './all-annonce.page.html',
  styleUrls: ['./all-annonce.page.scss'],
})
export class AllAnnoncePage implements OnInit {
  etatIcone = 'heart-outline';
  couleurIcone = 'black';
  annonces:any[]=[];


  // Fonction appelée lors du clic sur l'icône
  onClickIcone() {
    // Inversez l'état de l'icône
    this.etatIcone = (this.etatIcone === 'heart-outline') ? 'heart' : 'heart-outline';
    
    // Changez la couleur en rouge lorsque l'icône est pleine, sinon en noir
    this.couleurIcone = (this.etatIcone === 'heart') ? 'red' : 'black';
  }
  constructor(private annonceService:AnnonceService) { }

  ngOnInit() {
  }
  async all_annonce() {
    try {
        this.annonces = await this.annonceService.get_all_annonce();
        console.log(this.annonces);
    } catch (error) {
        console.error('Erreur lors de la récupération des annonces', error);
    }
  }
}
