import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  option:any;
  annonces:any;
  constructor(private loadingController:LoadingController,private route: ActivatedRoute,private annonceService:AnnonceService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.option = params['value'];
      this.getAnnonce();

  });
  // const loading = await this.loadingController.create({
  //   duration: 5000 // Optionnel : spécifiez une durée maximale pour l'indicateur de chargement
  // });
  // await loading.present();
}


  async getAnnonce(){
    try {
      this.annonces = await this.annonceService.get_annonce_by_id(this.option);
      console.log(this.annonces);
    } catch (error) {
      alert(error);
    }
  }

}
  


