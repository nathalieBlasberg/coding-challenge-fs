import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, take } from 'rxjs';
import { People, Person, Planet } from '@coding-challenge/mylib';

@Injectable()
export class StarWarsService {
  private baseUrl = 'https://www.swapi.tech/api';
  private limit = 10;

  constructor(private readonly httpService: HttpService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getPeople(search: string, page: number): Promise<People> {
    const searchQuery = search.length > 0 ? `name=${search}` : '';
    const pageQuery = page > 0 ? `page=${page}&limit=${this.limit}` : '';
    let query = '/';

    if (search.length > 0) {
      query = `/?${searchQuery}&${pageQuery}`;
    }

    if (search.length === 0) {
      query = `?${pageQuery}`;
    }

    const { data } = await firstValueFrom(
      this.httpService
        .get<People>(`${this.baseUrl}/people${query}`)
        .pipe(take(1))
    );
    return data;
  }

  async getPerson(id: string): Promise<Person> {
    const { data } = await firstValueFrom(
      this.httpService.get<Person>(`${this.baseUrl}/people/${id}`).pipe(take(1))
    );
    return data;
  }

  async getPlanet(id: string): Promise<Planet> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Planet>(`${this.baseUrl}/planets/${id}`)
        .pipe(take(1))
    );
    return data;
  }
}
