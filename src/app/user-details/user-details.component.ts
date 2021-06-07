import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UsersService} from '../users.service';
import {UserListComponent} from '../user-list/user-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

@Input() user: User;

  constructor(private usersService: UsersService, private listComponent: UserListComponent) { }

  ngOnInit(): void {
  }

}
