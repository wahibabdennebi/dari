import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFornitureComponent } from './add-forniture/add-forniture.component';
import { FornitureComponent } from './forniture/forniture.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {LoginComponent} from './login/login.component';




const routes: Routes = [
  {path: 'AddForniture', component: AddFornitureComponent},
  {path: 'getForniture', component: FornitureComponent},
  {path: 'register', component: RegisterComponent},
  // {path: '', redirectTo: '/register', pathMatch: 'full'},
  { path: 'users', component: UserListComponent },
  { path: 'add', component: UserComponent },
  { path: 'update/:id_user', component: UpdateUserComponent },
  // { path: 'add', component: CreateEmployeeComponent },
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
