

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './components/modal/modal.component';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {MenuModule} from '../menu/menu.module';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MenuModule
  ],
  entryComponents: [ModalComponent],
  exports: [
    FormsModule,
    ModalComponent,
    ReactiveFormsModule
  ],
  providers: []
})
export class AngularCommonModule { }
