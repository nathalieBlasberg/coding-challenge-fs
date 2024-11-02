import { Component, Input, OnInit } from "@angular/core";
import { StarWarsApiService } from "../../services/star-wars-api.service";
import { Observable, switchMap, take, tap } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-person-card",
  templateUrl: "./person-card.component.html",
  styleUrl: "./person-card.component.scss",
  providers: [StarWarsApiService],
})
export class PersonCardComponent implements OnInit {
  @Input() personData: any;

  public person: any;
  public planet: any;

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    console.log(this.personData);
    this.starWarsService
      .getPerson(this.personData["uid"])
      .pipe(
        take(1),
        switchMap((data) => {
          this.setPersonData(data);
          return this.getPlanetData();
        }),
        tap((data: any) => this.setPlanetData(data))
      )
      .subscribe();
  }

  public setPersonData(data: any): void {
    console.log(data);
    this.person = data.result;
  }

  public getPlanetData(): Observable<any> {
    const planetUrl = this.person.properties.homeworld;
    const matches = planetUrl.match(/\d+$/);

    return this.starWarsService.getPlanet(matches[0]);
  }

  public setPlanetData(data: any): void {
    this.planet = data.result;
  }
}
