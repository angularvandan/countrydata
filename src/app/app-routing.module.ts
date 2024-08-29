import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'country-details',component:CountryDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
