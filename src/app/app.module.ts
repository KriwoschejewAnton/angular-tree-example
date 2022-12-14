import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {Journals} from './journals';
import {Issues} from './issues';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';



@NgModule({
  declarations: [Journals,Issues],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService

  ],
  bootstrap: [Journals],
})
export class AppModule {}
