import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../infrastructure/pipes';




@NgModule({
  declarations: [
    TestingComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    TestingComponent
  ]
})
export class CoreModule { }
