import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { firstValueFrom, take } from "rxjs";

@Injectable()
export class StarWarsService {
  private baseUrl = "https://www.swapi.tech/api";

  constructor(private readonly httpService: HttpService) {}

  getData(): { message: string } {
    return { message: "Hello API" };
  }

  async getPeople(): Promise<AxiosResponse<any>> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${this.baseUrl}/people`).pipe(take(1))
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
