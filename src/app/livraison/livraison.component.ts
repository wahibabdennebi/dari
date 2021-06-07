import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LivraisonService } from './livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent implements OnInit {

  constructor(private service:LivraisonService) { }

  ngOnInit(): void {
  }
public ajouterlivreur(addForm:NgForm):void{
  this.service.ajouterlivreur(addForm.value).subscribe()
}
}
