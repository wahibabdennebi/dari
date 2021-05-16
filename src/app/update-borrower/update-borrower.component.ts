import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borrower } from '../model/borrower';
import { BorrowerService } from '../service-borrower/borrower.service';

@Component({
  selector: 'app-update-borrower',
  templateUrl: './update-borrower.component.html',
  styleUrls: ['./update-borrower.component.css']
})
export class UpdateBorrowerComponent implements OnInit {
  b:Borrower = new Borrower();
  id:number;

  constructor(private _service:BorrowerService , private _router:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
  this._service.getBorrowerById(this.id).subscribe( data =>{
    this.b=data;
  }
  , error => console.log(error));
}
onSubmit(){
  this._service.updateBorrower(this.id,this.b).subscribe(data =>{this.router.navigate(['listBorrower'])})
}


}
