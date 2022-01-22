import { Pipe, PipeTransform } from "@angular/core"
import { Country } from "../types/countries.types"

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(countries: Country[] | null, value: string): Country[] | null {
    if (!value.trim()) return countries

    return countries!.filter(country => country.name.toLowerCase().includes(value.toLowerCase()))
  }
}
