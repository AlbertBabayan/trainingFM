import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from "./components/user-list/user-list.component";
import { RouterModule, Routes } from "@angular/router";

const paths: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(paths),
  ]
})
export class UserRoutingModule { }
