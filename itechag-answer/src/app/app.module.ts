import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppRoutingModule } from './app-routing.module';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';

import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    GetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
