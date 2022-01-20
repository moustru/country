import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page/country-page.component'
import { MainPageComponent } from './pages/main-page/main-page.component'

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: ':id',
    component: CountryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
