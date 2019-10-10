import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import {RouterService} from './services/router.service';
import {RESTService} from './services/rest.service';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule
  ],
  entryComponents: [ModalComponent],
  providers: [
    RouterService,
    RESTService
  ]
})
export class SharedModule { }
