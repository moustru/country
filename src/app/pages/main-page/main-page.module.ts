import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule
  ]
})
export class MainPageModule { }
