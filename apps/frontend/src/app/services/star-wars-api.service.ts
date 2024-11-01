import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StarWarsApiService {
  private readonly http = inject(HttpClient);
  private BASE_URL = "https://www.swapi.tech/api";

  public getPeople(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/people/`);
  }

  public getPerson(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  public getPlanet(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
