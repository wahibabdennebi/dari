import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id_user: number;
  user: User;
  submitt = false;


  constructor(private route: ActivatedRoute, private router: Router,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.user = new User();
    this.id_user = this.route.snapshot.params.id_user;

    this.usersService.getUsers(this.id_user)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }
  /*updateUsers() {
    this.usersService.updateUsers(updateForm: NgForm).subscribe(data => {
        console.log(data);
        this.user = new User();
     //   this.submitt = false;
      //  this.gotoList();
      }, error => console.log(error));*/
 /* }*/

  onSubmit(updateForm: NgForm) {
    console.log(updateForm.value) ;
    this.usersService.updateUsers(updateForm.value).subscribe() ;
    this.router.navigate(['users']);
    // this.updateUsers();
  /*  this.submitt = true;*!/*/
  }

}
