import { Component, OnInit } from '@angular/core';
 import {User} from '../model/user';
import {UsersService} from '../users.service';
import {SignupInfo} from '../model/signup-info';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.createUsers(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
   // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


}
