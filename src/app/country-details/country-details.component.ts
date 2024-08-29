import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country!: Country | null;
  countryes:Country[]=[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


    this.apiService.country$.subscribe({
      next: (data) => {
        this.country = data;
        console.log(this.country);
        if (data) {
          localStorage.setItem('country_data', JSON.stringify(data));
        }
        else {
          let data = JSON.parse(localStorage.getItem('country_data') || '');
          if (data != '') {
            this.country = data;
          }
        }
        this.getAllCountryes();
      },
      error: (err) => console.error('Failed to load data', err)
    });
  }
  getAllCountryes(){
    this.apiService.getCountries().subscribe({
      next:(response:any)=>{
        this.countryes=response;
        console.log(this.countryes);
      },error:(err)=>{
        console.log(err); 
      }
    })
  }
 
}
