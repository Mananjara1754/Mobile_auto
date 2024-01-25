import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../services/marque.service';
import { AnnonceService } from '../services/annonce.service';
import { LoadingService } from '../services/loading.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ajout-annonce',
  templateUrl: './ajout-annonce.page.html',
  styleUrls: ['./ajout-annonce.page.scss'],
})
export class AjoutAnnoncePage implements OnInit {
  idCategorie:any;
  idMarque:any;
  idVoiture:any;
  ficheChoisi:any;
  kilometrage:any;
  etat:any;
  description:any;
  prix_vente:any;
  categories:any[]=[];
  marques:any[]=[];
  voitures:any[]=[];
  ficheTechniques:any[]=[];
  selectedFile: any;
  constructor(private loadingController:LoadingController,private loadingService:LoadingService,private marqueService:MarqueService,private annonceService:AnnonceService) {
    
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
  onFileSelected(event: any) {
    this.selectedFile = event.target.files;
  }
  async insertAnnonce(){
    // console.log(this.idMarque); 
    // console.log(this.idVoiture); 
    // console.log(this.ficheChoisi); 
    // console.log(this.kilometrage); 
    // console.log(this.etat); 
    // console.log(this.description); 
    // console.log(this.prix_vente); 
    const formData = new FormData();

    
    
    // formData.append('idMarque', this.idMarque);
    formData.append('idVoiture', this.idVoiture);
    formData.append('idFicheTechnique', this.ficheChoisi);
    formData.append('idCategorie', "CATEG6");
    
    formData.append('kilometrage', this.kilometrage);
    formData.append('etatVoiture', this.etat);
    formData.append('description', this.description);
    formData.append('prixVente', this.prix_vente);
    formData.append('photos', this.selectedFile);
    
    console.log(this.selectedFile);
    console.log(formData);
    await this.annonceService.envoyerFormData(formData);
    console.log("Okey");
  }
  async ngOnInit() {
    await this.showLoading();
    this.all_marque();
    this.get_all_voiture();
    this.all_fiche();
    this.all_categori();
  }
  async all_categori() {
    try {
        this.categories= await this.annonceService.get_all_categorie();
        console.log(this.categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des erreur recup categorie', error);
    }
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
