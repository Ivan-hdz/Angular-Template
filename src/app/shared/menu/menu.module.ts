import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MatDrawerContainer, MatDrawerContent, MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MyTranslateModule} from '../translate/translate.module';



@NgModule({
  declarations: [MainComponent, SidenavComponent],
  exports: [
    MainComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MyTranslateModule,
    LayoutModule
  ]
})
export class MenuModule { }
