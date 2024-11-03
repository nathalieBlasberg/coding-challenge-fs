import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  @Input() people: number;
  @Input() search: number;
  @Input() page: number;
  @Input() total: number;

  @Output() newPageEvent = new EventEmitter<number>();

  public peopleLength: number;
  public searchLength: number;
  public pageCount: number;
  public totalPages: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['people']) {
      this.peopleLength = changes['people'].currentValue;
    }

    if (changes['search']) {
      this.searchLength = changes['search'].currentValue;
    }

    if (changes['page']) {
      this.pageCount = changes['page'].currentValue;
    }

    if (changes['total']) {
      this.totalPages = changes['total'].currentValue;
    }
  }

  public onPageChange(page: number) {
    this.newPageEvent.emit(page);
  }
}
