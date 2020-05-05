

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

const config = new MatPaginatorIntl();
config.itemsPerPageLabel = 'Elementos por página';
config.firstPageLabel = 'Primer página';
config.lastPageLabel = 'Última página';
config.nextPageLabel = 'Página siguiente';
config.previousPageLabel = 'Página anterior';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ ],
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
