import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../infrastructure/pipes';
import { TestComponent } from './test/test.component';
import {TableModule} from 'primeng-lts/table';



@NgModule({
  declarations: [
    TestingComponent,
    FilterPipe,
    TestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule
  ],
  exports: [
    TestingComponent
  ]
})
export class CoreModule { }
