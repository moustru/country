import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FilterPipe } from 'src/app/core/pipes/filter.pipe'

@NgModule({
  declarations: [
    MainPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class MainPageModule { }
