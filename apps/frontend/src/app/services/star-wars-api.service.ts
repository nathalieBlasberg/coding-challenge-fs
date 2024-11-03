import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { People, Person, Planet } from '@coding-challenge/mylib';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  private readonly http = inject(HttpClient);
  private baseUrl = '/api/star-wars';

  public getPeople(search: string, page: number): Observable<People> {
    let query = '';

    if (search.length === 0) {
      query = `?search=&page=${page}`;
    }

    if (search.length > 0) {
      query = `?search=${search}&page=${page}`;
    }

    return this.http.get<People>(`${this.baseUrl}/people${query}`);
  }

  public getPerson(id: string): Observable<Person> {
    return this.http.get<any>(`${this.baseUrl}/person/${id}`);
  }

  public getPlanet(id: string): Observable<Planet> {
    return this.http.get<any>(`${this.baseUrl}/planet/${id}`);
  }
}
