import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private db: any; // Use 'any' type for LocalForage instance

  constructor() {
    this.initDatabase();
    this.insertData();
  }
  

  private async initDatabase() {
    try {
      this.db = await localforage.createInstance({
        name: 'fruits_db'
      });
      console.log('Database initialized');
    } catch (error) {
      console.error('Error initializing database', error);
    }
  }

  // async getAllFruits(): Promise<any[]> {
  //   try {
  //     const fruits = await this.db.getItem('fruits');
  //     alert(fruits);
  //     return fruits || [];
  //   } catch (error) {
  //     console.error('Error fetching fruits', error);
  //     return [];
  //   }
  // }
  async getActiviteByNiveau(niveau : any){
    const activites = await this.getAllActivite();
    const rep = [];
    for (const activite of activites) {
      if (activite.niveau == niveau) {
        rep.push(activite);
      }
    }
    //alert(rep);
    return rep;
  }

  async getAllCategorie(): Promise<any[]> {
    try {
      const categorie = await this.db.getItem('categorie');
     
      return categorie || [];
    } catch (error) {
      console.error('Error fetching categorie', error);
      return [];
    }
  }
  async getAllNiveau(): Promise<any[]> {
    try {
      const niveau = await this.db.getItem('niveau');
      //alert(niveau);
      return niveau || [];
    } catch (error) {
      console.error('Error fetching niveau', error);
      return [];
    }
  }
  async getAllActivite(): Promise<any[]> {
    try {
      this.db = await localforage.createInstance({
        name: 'fruits_db'
      });
      const activite = await this.db.getItem('activite');
      //alert(activite);
      return activite || [];
    } catch (error) {
      console.error('Error fetching activite', error);
      return [];
    }
  }
  //Insertion des datas

  async insertData() {
    try {
      // Open the localforage database instance
      const db = await localforage.createInstance({
        name: 'fruits_db'
      });
  
      // Sample data to insert
      const categories = [
        {nom : 'Pectoraux' , idCategorie : '1'},
        {nom : 'Dos', idCategorie : '2'},
        {nom : 'Jambe', idCategorie : '3'}
      ];
      const niveaux = [
        {nom : 'Debutant' , idNiveau : '0'},
        {nom : 'Intermediaire', idNiveau : '50'},
        {nom : 'Professionnel', idNiveau : '100'}
      ];
      const activites = [
        {description : 'Pompe normale fois 10' , niveau : '0',categorie:'1', image:'pompe1.jpg'},
        {description : 'Pompe normale fois 15' , niveau : '0',categorie:'1', image:'pompe2.jpg'},
        {description : 'Pompe normale fois 20' , niveau : '0',categorie:'1', image:'pompe3.jpg'},
        {description : 'Seance d\'etirement des pectoraux' , niveau : '0',categorie:'1', image:'et.jpg'},


        {description : 'Pompe normale fois 15' , niveau : '50',categorie:'1', image:'pompe3.jpg'},
        {description : 'Pompe en diamant fois 15' , niveau : '50',categorie:'1', image:'pompe2.jpg'},
        {description : 'Pompe en diamant fois 20' , niveau : '50',categorie:'1', image:'pompe4.jpg'},
        {description : 'Seance d\'etirement des pectoraux' , niveau : '50',categorie:'1', image:'et.jpg'},

        {description : 'Pompe en diamant fois 20' , niveau : '100',categorie:'1', image:'pompeD.jpg'},
        {description : 'Pompe fois 40' , niveau : '100',categorie:'1', image:'pompe3.jpg'},
        {description : 'Pompe fois 40' , niveau : '100',categorie:'1', image:'pompe4.jpg'},
        {description : 'Seance d\'etirement des pectoraux' , niveau : '100',categorie:'1', image:'et.jpg'},


        {description : 'Barre fixe fois 10' , niveau : '0',categorie:'2', image:'bf1.jpg'},
        {description : 'Gainage 1 min' , niveau : '0',categorie:'2', image:'gn.jpg'},
        {description : 'Barre fixe fois 12' , niveau : '0',categorie:'2', image:'bf2.jpg'},

        {description : 'Barre fixe fois 10' , niveau : '50',categorie:'2', image:'bf1.jpg'},
        {description : 'Barre fixe fois 15' , niveau : '50',categorie:'2', image:'bf2.jpg'},
        {description : 'Dos avec poids x10 avec 3 repetitions' , niveau : '50',categorie:'2', image:'bf3.jpg'},

        {description : 'Barre fixe fois 20' , niveau : '100',categorie:'2', image:'bf2.jpg'},
        {description : 'Dos avec poids x10 avec 3 repetitions' , niveau : '100',categorie:'2', image:'bf3.jpg'},
        {description : 'Dos avec plus de poids x10 avec 3 repetitions' , niveau : '100',categorie:'2', image:'bf4.jpg'},

        {description : 'Bicyclette pendant 5min' , niveau : '0',categorie:'3', image:'bc.jpg'},
        {description : 'Squat x10 en 3 repetitions' , niveau : '0',categorie:'3', image:'sq1.jpg'},
        {description : 'Jumping Jack pendant 5min' , niveau : '0',categorie:'3', image:'jj.jpg'},

        {description : 'Bicyclette pendant 5min' , niveau : '50',categorie:'3', image:'bc.jpg'},
        {description : 'Squat x15 en 3 repetitions avec jambe serrees' , niveau : '50',categorie:'3', image:'sq2.jpg'},
        {description : 'Squat x15 en 3 repetitions avec jambe ecartees' , niveau : '50',categorie:'3', image:'sq3.jpg'},

        {description : 'Bicyclette pendant 10min' , niveau : '100',categorie:'3', image:'bc.jpg'},
        {description : 'Squat x20 en 3 repetitions avec jambe serrees'  , niveau : '100',categorie:'3', image:'sq2.jpg'},
        {description : 'Squat x20 en 3 repetitions avec jambe ecartees' , niveau : '100',categorie:'3', image:'sq3.jpg'}
      ];

      const fruits = [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' }
      ];
  
      // Insert each fruit into the database
      for (const fruit of fruits) {
        await db.setItem(fruit.name, fruit);
      
      }
        await db.setItem('categorie', categories);
        await db.setItem('niveau', niveaux);   
        await db.setItem('activite', activites);
      console.log('Data insertion completed!');
    } catch (error) {
      console.error('Error inserting data', error);
    }
  }
  
  // Call the insertData function


  // async addFruit(name: string): Promise<void> {
  //   try {
  //     const fruits = await this.getAllFruits();
  //     fruits.push({ name });
  //     await this.db.setItem('fruits', fruits);
  //     console.log('Fruit added');
  //   } catch (error) {
  //     console.error('Error adding fruit', error);
  //   }
  // }
}
