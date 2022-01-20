import { Injectable } from "@angular/core"
import { Apollo } from "apollo-angular"
import { Observable, Subscription } from "rxjs"
import { map } from "rxjs/operators"
import { Country } from "../types/countries.types"
import { GET_ALL_COUNTRIES, GET_COUNTRY_INFO } from './countries.queries'

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private apollo: Apollo) {}

  getCountries(): Observable<Country[] | null> {
    // В дженерике указывается поле, которое идет после data и указывается его тип
    return this.apollo.watchQuery<{ countries: Country[] }>({
      query: GET_ALL_COUNTRIES
    })
      .valueChanges
      .pipe(
        // Здесь мы преобразовываем данные (или просто возвращаем их, как в этом случае)
        map(res => res.data.countries)
      )
  }

  getCountry(code: Subscription | string): Observable<Country | null> {
    return this.apollo.watchQuery<{ country: Country }>({
      query: GET_COUNTRY_INFO,
      // Здесь указываются переменные для GraphQL-схемы
      variables: { code }
    })
      .valueChanges
      .pipe(
        map(res => res.data.country)
      )
  }
}
