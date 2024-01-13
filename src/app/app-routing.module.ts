import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'debut',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'joueur',
    loadChildren: () => import('./joueur/joueur.module').then( m => m.JoueurPageModule)
  },
  {
    path: 'debut',
    loadChildren: () => import('./debut/debut.module').then( m => m.DebutPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'ajout-annonce',
    loadChildren: () => import('./ajout-annonce/ajout-annonce.module').then( m => m.AjoutAnnoncePageModule)
  },
  {
    path: 'my-annonce',
    loadChildren: () => import('./my-annonce/my-annonce.module').then( m => m.MyAnnoncePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'favori',
    loadChildren: () => import('./favori/favori.module').then( m => m.FavoriPageModule)
  },
  {
    path: 'all-annonce',
    loadChildren: () => import('./all-annonce/all-annonce.module').then( m => m.AllAnnoncePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
