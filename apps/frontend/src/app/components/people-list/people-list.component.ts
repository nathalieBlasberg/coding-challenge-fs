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
  public pageNumber = 1;
  public totalPages = 0;

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.starWarsService
      .getPeople(this.pageNumber)
      .pipe(
        take(1),
        tap((data: any) => this.assignData(data))
      )
      .subscribe();
  }

  public assignData(data: any): void {
    this.people = data?.results;
    this.totalPages = data.total_pages;
  }

  public switchPage(count: number): void {
    this.pageNumber += count;
    this.pageNumber = this.pageNumber < 0 ? 0 : this.pageNumber;

    this.getData();
  }
}
