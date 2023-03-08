import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {InputNumberModule} from 'primeng-lts/inputnumber';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HighlightDirective } from './infrastructure/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
