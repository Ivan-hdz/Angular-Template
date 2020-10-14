

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RESTService} from './services/rest.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/httpError.interceptor';
import {JwtInterceptor} from './interceptors/jwt.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RESTService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class RESTModule { }
