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
    this.starWarsService
      .getPerson(this.personData["uid"])
      .pipe(
        take(1),
        switchMap((data) => this.getPersonData(data)),
        tap((data: any) => (this.planet = data.result))
      )
      .subscribe();
  }

  public getPersonData(data: any): Observable<any> {
    this.person = data.result;
    const planet = this.person.properties.homeworld;
    const matches = planet.match(/\d+$/);

    return this.starWarsService.getPlanet(matches[0]);
  }
}
