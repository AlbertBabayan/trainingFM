import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../../services/user.service";
import { IUser } from "../../../../infrastructure/interfaces";
import { Router } from "@angular/router";
import { TestingComponent } from 'src/app/core/testing/testing.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: IUser[] = [];

  private userService = inject(UserService);
  private router = inject(Router);
  @ViewChild(TestingComponent) child: TestingComponent;

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users)
  }

  public forChild() {
    this.child.foo_1();
  }

  public navigateToUser(id: number): void {
    this.router.navigate(['user-details', id]);
  }
  public navigateToCreate(): void {
    this.router.navigate(['create']);
  }
}
