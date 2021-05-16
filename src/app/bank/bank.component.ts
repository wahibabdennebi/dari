import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../model/bank';
import { BankService } from '../service-bank/bank.service';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bank:Bank = new Bank();

  constructor(private ps : BankService , private _router:Router) { }

  addBank(){
    this.ps.addBank(this.bank).subscribe(() => {this._router.navigateByUrl("/listBank");alert("l'ajout s'est fait avec succés")} )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.bank);
    this.addBank();
  }

}
