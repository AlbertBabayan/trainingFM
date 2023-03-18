import { Component, inject, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { IUser } from "../../../../infrastructure/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: IUser[] = [];

  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  public navigateToUser(id: number): void {
    this.router.navigate(['user-details', id]);
  }
}
