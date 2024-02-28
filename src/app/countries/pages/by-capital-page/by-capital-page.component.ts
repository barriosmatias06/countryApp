import { Component } from '@angular/core';
import { first } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/county';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService){

  }

  searchByCapital ( term: string ):void {
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }


}
