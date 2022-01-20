import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { CountriesService } from 'src/app/core/services/countries.service'
import { Country } from 'src/app/core/types/countries.types'

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {
  countryInfo: Country | null
  // countryId: any

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  getCountryInfo(id: string) {
    this.countriesService.getCountry(id)
      .subscribe(
        res => this.countryInfo = res
      )
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCountryInfo(params['id'])
    })

    // this.getCountryInfo()
  }
}
