import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livreur } from './livreur';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  livreur:Livreur;

  constructor(private http:HttpClient) { }
  public ajouterlivreur(livreur:Livreur ){
    return this.http.post("http://localhost:8083/Livreur/ajouterLivreur",livreur)

  }
  public supprimerLivreur(livreur:Livreur){
    return this.http.delete("http://localhost:8083/SpringMVC/servlet/supprimerLivreur")
  }

}
