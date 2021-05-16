import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../model/bank';
import { Borrower } from '../model/borrower';
import { BankService } from '../service-bank/bank.service';
import { BorrowerService } from '../service-borrower/borrower.service';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  listBorrower:Borrower[];
  listBank:Bank[];
  b:Bank;
  br:Borrower;
  emprunt:number;
  periode:number;
  brmod=new Borrower();
  id:number

  constructor(private _service:BorrowerService,private _ps:BankService , private _router:Router) { }

  ngOnInit(): void {
    this._service.getBorrower().subscribe(res => {console.log(res); this.listBorrower=res});
    this._ps.getBank().subscribe(res => {console.log(res); this.listBank=res})
  }
  capacite(idBr:number,idB:number,periode:number){
    this._service.capacite(idBr,idB,periode).subscribe(res => alert(res));
  }
  mensualite(id:number,empt:number,period:number){
    this._ps.mensualite(id,empt,period).subscribe(res => alert(res));
  }
  getById(){
    this._service.getBorrowerById(this.id).subscribe(() => alert("Borrower existe"));

  }

}
