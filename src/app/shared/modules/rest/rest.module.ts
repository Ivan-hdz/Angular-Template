

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RESTService} from './services/rest.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UnauthorizedInterceptor} from './interceptors/unauthorized.interceptor';
import {Token} from '@angular/compiler';
import {TokenInterceptor} from './interceptors/token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RESTService
  ]
})
export class RESTModule { }
