import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarWarsApiService } from "../../services/star-wars-api.service";
import { take, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PersonCardComponent } from "../person-card/person-card.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: "app-people-list",
  standalone: true,
  imports: [CommonModule, PersonCardComponent, HeaderComponent],
  providers: [HttpClient],
  templateUrl: "./people-list.component.html",
  styleUrl: "./people-list.component.css",
})
export class PeopleListComponent implements OnInit {
  public people: any[] = [];

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.starWarsService
      .getPeople()
      .pipe(
        take(1),
        tap((data) => console.log(data))
      )
      .subscribe({
        next: (next: any) => (this.people = next?.results),
      });
  }
}
