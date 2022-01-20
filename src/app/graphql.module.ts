import { HttpClientModule } from '@angular/common/http'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: 'https://countries.trevorblades.com/graphql'
    })
  }
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [ HttpLink ]
    }
  ]
})

export class GraphQLModule {}
