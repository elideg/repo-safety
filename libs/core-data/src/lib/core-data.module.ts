import { TOKEN_NAME } from './auth/auth.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://api.github.com/graphql';
const key = localStorage.getItem(TOKEN_NAME);
const headers = new HttpHeaders().set('Authorization', `bearer ${key}`);


export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri, headers }),
    cache: new InMemoryCache()
  }
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  exports: [ApolloModule, HttpLinkModule]
})
export class CoreDataModule {}
