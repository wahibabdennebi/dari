import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visit } from '../model/visit';
import { VisitService } from '../service-visit/visit.service';

@Component({
  selector: 'app-get-visit',
  templateUrl: './get-visit.component.html',
  styleUrls: ['./get-visit.component.css']
})
export class GetVisitComponent implements OnInit {
  listVisit:Visit[];
  visitmod = new Visit();

  constructor(private _service:VisitService , private _router:Router) { }
  

  ngOnInit(): void {
    this._service.getVisit().subscribe(res => {console.log(res); this.listVisit=res})

   
    
  }
  deleteVisit(id:number){
    this._service.deleteVisitById(id).subscribe(() => alert("la suppression se fait avec succées"));
    this._router.navigateByUrl('/listVisit').then(() => {
      window.location.reload();
      });
  }
  updateVisit(id:number){
    /*this._service.updateVisit(this.visitmod).subscribe(() => {this._router.navigateByUrl("/listVisit");alert("La modification se fait avec succés")})*/
    this._router.navigate(['update-visit',id]);
  }

}
