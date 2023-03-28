import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./services/user.service";
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserDetailsComponent,
    UserListComponent,
    CreateUserComponent
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
