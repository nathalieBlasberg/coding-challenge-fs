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

  async getPeople(page: number): Promise<AxiosResponse<any>> {
    const pageQuery = page > 1 ? `?page=${page}&limit=${this.limit}` : "";
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>(`${this.baseUrl}/people${pageQuery}`)
        .pipe(take(1))
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
