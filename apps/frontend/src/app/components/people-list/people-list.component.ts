import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsApiService } from '../../services/star-wars-api.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonCardComponent } from '../person-card/person-card.component';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { People, Result } from '@coding-challenge/mylib';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PersonCardComponent,
    PaginationComponent,
  ],
  providers: [HttpClient],
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  public people: Result[] = [];
  public pageNumber = 1;
  public totalPages = 0;
  public search = '';

  constructor(private starWarsService: StarWarsApiService) {}

  public ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.starWarsService
      .getPeople(this.search, this.pageNumber)
      .pipe(
        takeUntil(this.onDestroy$),
        tap((data: People) => this.assignData(data))
      )
      .subscribe();
  }

  public assignData(data: People): void {
    this.people = data?.results ?? data.result ?? [];
    this.totalPages = data.total_pages;
  }

  public switchPage(count: number): void {
    this.pageNumber += count;
    this.pageNumber = this.pageNumber < 1 ? 1 : this.pageNumber;
    this.pageNumber =
      this.pageNumber > this.totalPages ? this.totalPages : this.pageNumber;

    this.getData();
  }

  public setSearch(search: string): void {
    this.search = search;

    this.getData();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
