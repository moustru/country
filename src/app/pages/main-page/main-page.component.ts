import { Component, NgIterable, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/core/services/countries.service'
import { Country } from 'src/app/core/types/countries.types'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  relatedCountry: string
  countries: Country[] | null
  countryInfo: Country | null

  constructor(private countryService: CountriesService) {}

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(
        res => this.countries = res
      )
  }

  changeCountry(): void {
    this.countryService.getCountry(this.relatedCountry)
      .subscribe(
        res => this.countryInfo = res
      )
  }

  ngOnInit() {
    this.getCountries()
  }

}
