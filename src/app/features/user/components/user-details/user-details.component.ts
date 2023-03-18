import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { IUser } from "../../../../infrastructure/interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  private activeRoute = inject(ActivatedRoute);
  private userService = inject(UserService);
  public user: IUser | undefined;

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.userService.getUser(+params['id']).subscribe((user: IUser | undefined) => {
        this.user = user;
      });
    });
  }
  // switchMap or mergeMap
  // read activatedRoute.snapshot
}
