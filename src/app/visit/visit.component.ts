import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visit } from '../model/visit';
import { VisitService } from '../service-visit/visit.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  visit:Visit = new Visit();

  constructor(private ps : VisitService , private _router:Router) { }

  addVisit(){
    this.ps.addVisit(this.visit).subscribe(() => {this._router.navigateByUrl("/listVisit");alert("l'ajout s'est fait avec succés")} )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.visit);
    this.addVisit();
  }


}
