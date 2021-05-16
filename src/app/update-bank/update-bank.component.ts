import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../model/bank';
import { BankService } from '../service-bank/bank.service';

@Component({
  selector: 'app-update-bank',
  templateUrl: './update-bank.component.html',
  styleUrls: ['./update-bank.component.css']
})
export class UpdateBankComponent implements OnInit {
  b:Bank = new Bank();
  id:number;

  constructor(private _service:BankService , private _router:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this._service.getBankById(this.id).subscribe( data =>{
      this.b=data;
    }
    , error => console.log(error));
  }
  onSubmit(){
    this._service.updateBank(this.id,this.b).subscribe(data =>{this.router.navigate(['listBank'])})
  }

}
