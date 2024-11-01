import { Component, Input, OnInit } from "@angular/core";
import { StarWarsApiService } from "../../services/star-wars-api.service";
import { switchMap, take, tap } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-person-card",
  templateUrl: "./person-card.component.html",
  styleUrl: "./person-card.component.css",
  providers: [StarWarsApiService],
})
export class PersonCardComponent implements OnInit {
  @Input() personData: any;

  public person: any;
  public planet: any;

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.starWarsService
      .getPerson(this.personData["url"])
      .pipe(
        take(1),
        tap((data) => console.log(data)),
        switchMap((data) => {
          this.person = data.result;
          return this.starWarsService.getPlanet(
            this.person.properties.homeworld
          );
        }),
        tap((data) => (this.planet = data.result))
      )
      .subscribe();
  }
}
