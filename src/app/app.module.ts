import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from "./shared/modules/menu/menu.module";
import {RESTModule} from "./shared/modules/rest/rest.module";
import {AngularCommonModule} from "./shared/modules/angular-common/angular-common.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    RESTModule,
    AngularCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
