import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  nom:any;
  prenom:any;
  mdp:any;
  validation:any;
  email:any;
  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
  }

  ngOnInit() {
    
  }
  async onSubmit() {
    this.authService.inscription(this.nom,this.prenom,this.email,this.mdp,this.validation);
  }

}
