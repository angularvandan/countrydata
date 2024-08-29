import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dataUrl = 'assets/data.json';  // Path to your JSON file
  private countrySubject = new BehaviorSubject<Country | null>(null);
  country$ = this.countrySubject.asObservable(); 

  constructor(private http: HttpClient) { }

  updateCountry(newCountry: Country): void {
    this.countrySubject.next(newCountry);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.dataUrl);
  }

}
