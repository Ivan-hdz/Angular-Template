

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModalComponent} from './components/modal/modal.component';
import {MenuModule} from '../menu/menu.module';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {PageWithFooterAndHeaderComponent} from "./components/page-with-footer-and-header/page-with-footer-and-header.component";
import { MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ModalComponent, PageWithFooterAndHeaderComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
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
    PageWithFooterAndHeaderComponent,
    ReactiveFormsModule
  ],
  providers: []
})
export class AngularCommonModule { }
