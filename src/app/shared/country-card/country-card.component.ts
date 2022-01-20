import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
import { Country } from 'src/app/core/types/countries.types'

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country: Country

  constructor(private router: Router) { }

  goToCountry(): void {
    this.router.navigateByUrl(`/${this.country.code}`)
  }
}
