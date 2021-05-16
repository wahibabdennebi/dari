import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Visit } from '../model/visit';
import { VisitService } from '../service-visit/visit.service';

@Component({
  selector: 'app-update-visit',
  templateUrl: './update-visit.component.html',
  styleUrls: ['./update-visit.component.css']
})
export class UpdateVisitComponent implements OnInit {
  v:Visit = new Visit();
  id:number;

  constructor(private _service:VisitService , private _router:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    
      this.id = this._router.snapshot.params['id'];
    this._service.getVisitById(this.id).subscribe( data =>{
      this.v=data;
    }
    , error => console.log(error));
  }
  onSubmit(){
    this._service.updateVisit(this.id,this.v).subscribe(data =>{this.router.navigate(['listVisit'])})
  }

}
