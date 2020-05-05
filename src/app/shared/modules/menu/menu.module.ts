

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import {MenuComponent} from './components/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    LayoutModule,
    SharedMaterialModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
