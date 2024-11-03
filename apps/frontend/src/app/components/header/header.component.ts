import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { INVALID, z } from 'zod';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();

  private pattern = '^[a-zA-Z ]*$';
  private schema = z
    .string()
    .toLowerCase()
    .refine((search) => search.match(this.pattern));

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  public setForm(): void {
    this.searchForm = this.formBuilder.group({
      searchName: [''],
    });
  }

  get searchName() {
    return this.searchForm.get('searchName');
  }

  public onSearchChange(search: string) {
    try {
      this.schema.parse(search);
      this.newSearchEvent.emit(search.toLowerCase());
    } catch (error) {
      this.searchName?.setErrors({ INVALID });
    }
  }
}
