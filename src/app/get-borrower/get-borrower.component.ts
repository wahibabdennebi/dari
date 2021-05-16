import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from '../model/borrower';
import { BorrowerService } from '../service-borrower/borrower.service';

@Component({
  selector: 'app-get-borrower',
  templateUrl: './get-borrower.component.html',
  styleUrls: ['./get-borrower.component.css']
})
export class GetBorrowerComponent implements OnInit {
  listBorrower:Borrower[];
  Brmod = new Borrower();

  constructor(private _service:BorrowerService , private _router:Router) { }

  ngOnInit(): void {
    this._service.getBorrower().subscribe(res => {console.log(res); this.listBorrower=res})
  }
  deleteBorrower(id:number){
    this._service.deleteBorrowerById(id).subscribe(() =>  alert("le Borrower est supprimé avec succées"));
    this._router.navigateByUrl('/listBorrower').then(() => {
      window.location.reload();
      });

  }
  updateBorrower(id:number){
    this._router.navigate(['update-borrower',id]);

    /*this._service.updateBorrower(this.Brmod).subscribe(() => {this._router.navigateByUrl("/listBorrower");alert("La modification s'est fait avec succés")})*/
  }
  /*location.reload();*/

}
