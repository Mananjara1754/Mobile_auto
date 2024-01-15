import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  inscriptionForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private authService:AuthService) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      mdp: ['', Validators.required],
      validation:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  async onSubmit() {
    const email = this.inscriptionForm.value.email;
    const mdp = this.inscriptionForm.value.mdp;
    const nom = this.inscriptionForm.value.nom;
    const prenom = this.inscriptionForm.value.prenom;
    const validation = this.inscriptionForm.value.validation;
    console.log(email);
    console.log(mdp);
    console.log(nom);
    console.log(prenom);
    this.authService.inscription(nom,prenom,email,mdp,validation);
  }

}
