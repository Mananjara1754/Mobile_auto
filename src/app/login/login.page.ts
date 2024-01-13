import { Component, OnInit ,ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm : FormGroup;
  email:any;
  mdp:any;
  erreur:any;
  responseData: any;

  constructor(private authService: AuthService,private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      mdp: ['', Validators.required],
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const mdp = this.loginForm.value.mdp;
    console.log(email);
    console.log(mdp);
    this.authService.login(email,mdp);
  }
  ngOnInit() {
  }
  
  @ViewChild(IonRefresher) refresher!: IonRefresher;

  // Fonction appelée lors du rafraîchissement
  async doRefresh(event: any) {
    // Mettez en œuvre votre logique de rafraîchissement ici
    console.log('Rafraîchissement en cours...');

    // Simulez une opération asynchrone (remplacez cela par votre propre logique)
    setTimeout(() => {
      console.log('Rafraîchissement terminé');
      // Terminez le rafraîchissement
      event.target.complete();
    }, 2000);
  }

}
