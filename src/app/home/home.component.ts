import { Component } from '@angular/core';
import { Country } from '../shared/models/country.model';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countries: Country[] = [];
  filteredCountries:Country[]=[];
  searchText:string='';
  dropDownValue:string='';

  constructor(private apiService: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.filteredCountries=this.countries;
        console.log(this.countries)
      },
      error: (err) => console.error('Failed to load data', err)
    });
  }
  findCountry(){
    this.filteredCountries=this.countries.filter((country:Country)=>{
      return country.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
  filterByRegion(){
    this.filteredCountries=this.countries.filter((country:Country)=>{
      return country.region.toLowerCase().includes(this.dropDownValue.toLowerCase())
    })
  }
  viewDetails(country:Country){
    this.apiService.updateCountry(country);
    this.router.navigate(['/country-details']);
  }
}
