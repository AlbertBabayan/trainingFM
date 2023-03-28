import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from "./components/user-list/user-list.component";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from './components/create-user/create-user.component';

const paths: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
  {path: 'create', component: CreateUserComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paths),
  ]
})
export class UserRoutingModule { }
