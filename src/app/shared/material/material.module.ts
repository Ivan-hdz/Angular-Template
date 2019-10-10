import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorIntl,
  MatPaginatorModule, MatSliderModule, MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';

const config = new MatPaginatorIntl();
config.itemsPerPageLabel = 'Elementos por página';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatFormFieldModule,
    MatSortModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: config
    }
  ]
})
export class MaterialModule { }
