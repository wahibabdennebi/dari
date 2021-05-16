import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bank } from '../model/bank';
import { BankService } from '../service-bank/bank.service';


@Component({
  selector: 'app-get-bank',
  templateUrl: './get-bank.component.html',
  styleUrls: ['./get-bank.component.css']
})
export class GetBankComponent implements OnInit {
  listBank:Bank[];
  Bkmod = new Bank();
  

  constructor(private _service:BankService , private _router:Router) { }

  ngOnInit(): void {
    this._service.getBank().subscribe(res => {console.log(res); this.listBank=res})
  }
  deleteBank(id:number){
    this._service.deleteBankById(id).subscribe(() =>  {alert("la suppression se fait avec succées")});
    this._router.navigateByUrl('/listBank').then(() => {
      window.location.reload();
      });
  }
  updateBank(id:number){
    this._router.navigate(['update-bank',id]);
    /*this._service.updateBank(this.Bkmod).subscribe(() => {this._router.navigateByUrl("/listBank");alert("La modification s'est fait avec succés")});*/
  }
  rappel(b:Bank,id:number){
    this._service.rappel(b,id).subscribe(() =>  {alert("le mail est envoyé avec succées")});
  }
 

}
