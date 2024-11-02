import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StarWarsApiService {
  private readonly http = inject(HttpClient);
  private baseUrl = "/api/star-wars";

  public getPeople(page: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/people/${page}`);
  }

  public getPerson(id: string): Observable<any> {
    console.log(id);
    return this.http.get<any>(`${this.baseUrl}/person/${id}`);
  }

  public getPlanet(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/planet/${id}`);
  }
}
