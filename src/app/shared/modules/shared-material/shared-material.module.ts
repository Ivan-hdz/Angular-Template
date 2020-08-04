

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from "@angular/cdk/layout";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

const config = new MatPaginatorIntl();
config.itemsPerPageLabel = 'Elementos por página';
config.firstPageLabel = 'Primer página';
config.lastPageLabel = 'Última página';
config.nextPageLabel = 'Página siguiente';
config.previousPageLabel = 'Página anterior';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    LayoutModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
    {provide: MatPaginatorIntl, useValue: 'es-MX'},
    {
      provide: MatPaginatorIntl,
      useValue: config
    }
  ]
})
export class SharedMaterialModule { }
