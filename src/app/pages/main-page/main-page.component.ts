import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { CountriesService } from 'src/app/core/services/countries.service'
import { Country } from 'src/app/core/types/countries.types'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  countries: Country[] | null
  filterForm: FormGroup

  constructor(
    private countryService: CountriesService,
    private fb: FormBuilder
  ) {}

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(
        res => this.countries = res
      )
  }

  ngOnInit() {
    this.getCountries()

    this.filterForm = this.fb.group({
      countryName: ''
    })
  }
}
