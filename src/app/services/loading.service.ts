import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = false;

  constructor(private loadingController: LoadingController) {}

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Chargement en cours...',
      duration: 5000, // Durée maximale du chargement en millisecondes (ajustez selon vos besoins)
    }).then(loading => {
      if (this.isLoading) {
        loading.present();
      } else {
        loading.dismiss();
      }
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

}
