import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from '../model/borrower';
import { BorrowerService } from '../service-borrower/borrower.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {
  borrower:Borrower = new Borrower();

  constructor(private ps : BorrowerService , private _router:Router) { }

  addBorrower(){
    this.ps.addBorrower(this.borrower).subscribe(() => {this._router.navigateByUrl("/listBorrower");alert("l'ajout s'est fait avec succés")} )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.borrower);
    this.addBorrower();
  }


}
