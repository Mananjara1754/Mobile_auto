import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  nom_domaine:any="https://clouddevvoitures5backend-production.up.railway.app";
  constructor(private router : Router) { }

  getidUser(){
    const json = localStorage.getItem('token');
    if(json != null){
      const k = JSON.parse(json);
      return k.data[0].idUser;
    }
    return null;
  }
  getToken(){
    const json = localStorage.getItem('token');
    if(json != null){
      const k = JSON.parse(json);
      return k.data[1].token;
    }
    return null;
  }
  getHeaderToken(){
    const token=this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
  deconnecter() {
    localStorage.clear();
    this.router.navigate(['/debut']);
  }
  checkError(error:any){
    if (error instanceof HttpErrorResponse) {
      const errorValue = error.status;
      console.log(errorValue);
      if(errorValue === 500){
        this.deconnecter();
      }
    }
  }
  
}
