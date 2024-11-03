import { Component, Input, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../services/star-wars-api.service';
import { Observable, switchMap, take, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  Result,
  Person,
  Planet,
  PersonResult,
  PlanetResult,
} from '@coding-challenge/mylib';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss',
  providers: [StarWarsApiService],
})
export class PersonCardComponent implements OnInit {
  @Input() personData: Result;

  public person: PersonResult;
  public planet: PlanetResult;

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.starWarsService
      .getPerson(this.personData['uid'])
      .pipe(
        take(1),
        switchMap((data: Person) => {
          this.setPersonData(data);
          return this.getPlanetData();
        }),
        tap((data: Planet) => this.setPlanetData(data))
      )
      .subscribe();
  }

  public setPersonData(data: Person): void {
    this.person = data.result;
  }

  public getPlanetData(): Observable<Planet> {
    const planetUrl = this.person.properties.homeworld;
    const matches = planetUrl.match(/\d+$/);

    return this.starWarsService.getPlanet(matches ? matches[0] : '');
  }

  public setPlanetData(data: Planet): void {
    this.planet = data.result;
  }
}
