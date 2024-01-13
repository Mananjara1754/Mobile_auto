import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.page.html',
  styleUrls: ['./debut.page.scss'],
})
export class DebutPage implements OnInit {

  constructor(private route:Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.tokenExisteDansLocalStorage();
  }
  tokenExisteDansLocalStorage(){
    const token = localStorage.getItem('token');
    if(token!==null){
      this.route.navigate(['/accueil']);
    }
  }
}
