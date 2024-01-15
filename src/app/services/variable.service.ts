import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  nom_domaine:any="https://devvoitures5backend-production.up.railway.app";
  constructor() { }
}
