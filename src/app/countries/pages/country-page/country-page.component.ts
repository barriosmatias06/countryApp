import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Country, Idd } from '../../interfaces/county';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
// import { tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor (
    private activateRoute: ActivatedRoute,
    private router : Router,
    private countriesService: CountriesService,
    ) {}


  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)),
      // tap(console.log)

    )
    .subscribe(country =>{

      if ( !country ) return this.router.navigateByUrl('');
      return this.country = country;

    });
  }
  searchCountry( code : string ){
    this.activateRoute.params
    .subscribe( ({id})=> {

      this.countriesService.searchCountryByAlphaCode(code)
      .subscribe ( country => {
        console.log({country})
      })

    })

  }

}
