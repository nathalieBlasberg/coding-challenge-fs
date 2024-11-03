import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { firstValueFrom, take } from "rxjs";

@Injectable()
export class StarWarsService {
  private baseUrl = "https://www.swapi.tech/api";
  private limit = 10;
  private l = "https://www.swapi.tech/api/people?page=2&limit=10";

  constructor(private readonly httpService: HttpService) {}

  getData(): { message: string } {
    return { message: "Hello API" };
  }

  async getPeople(search: string, page: number): Promise<AxiosResponse<any>> {
    const searchQuery = search.length > 0 ? `name=${search}` : "";
    const pageQuery = page > 0 ? `page=${page}&limit=${this.limit}` : "";
    let query = "/";

    if (search.length > 0) {
      query = `/?${searchQuery}&${pageQuery}`;
    }

    if (search.length === 0) {
      query = `?${pageQuery}`;
    }

    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${this.baseUrl}/people${query}`).pipe(take(1))
    );
    return data;
  }

  async getPerson(id: string): Promise<AxiosResponse<any>> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${this.baseUrl}/people/${id}`).pipe(take(1))
    );
    return data;
  }

  async getPlanet(id: string): Promise<AxiosResponse<any>> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${this.baseUrl}/planets/${id}`).pipe(take(1))
    );
    return data;
  }
}
