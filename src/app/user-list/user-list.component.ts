import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
// import {User} from '../model/user';
import {SignupInfo} from '../model/signup-info';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Observable<SignupInfo[]>;

  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.users = this.usersService.getUsersList();
  }

  deleteUsers(id_user: number) {
    this.usersService.deleteUsers(id_user).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));


  }

  updateUsers(id_user: number){
    this.router.navigate(['update', id_user]);
  }

}
