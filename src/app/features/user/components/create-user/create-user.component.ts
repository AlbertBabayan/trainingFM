import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy {

  userForm: FormGroup;
  previewImage: any;
  userService = inject(UserService);
  router = inject(Router);
  destroy$ = new Subject;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      age: ['', [Validators.required]],
      job: this.formBuilder.group({
        title: [''],
        language: ['']
      })
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  addUser() {
    const newUser = {
      ...this.userForm.value,
      id: this.userService.users[this.userService.users.length - 1].id + 1,
      job: {
        title: this.userForm.value.job.title,
        language: 'JavaScript'
      }
    }
    this.userService.addUser(newUser)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.router.navigate(['/user-list']));
  }

  onFileSelect(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64: string = reader.result as string;
      this.previewImage = base64;
    };
    reader.readAsDataURL(file);
  }

}
