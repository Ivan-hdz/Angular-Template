

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {LayoutModule} from "@angular/cdk/layout";

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
    MatIconModule
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
