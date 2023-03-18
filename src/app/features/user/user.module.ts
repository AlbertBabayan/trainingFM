import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./services/user.service";


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [
    UserDetailsComponent,
    UserListComponent
  ],
  providers: [
    UserService,
  ],
})
export class UserModule { }
