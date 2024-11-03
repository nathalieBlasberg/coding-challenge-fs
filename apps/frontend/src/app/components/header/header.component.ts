import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();

  private pattern = "^[a-zA-Z ]*$";

  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchName: ["", Validators.pattern(this.pattern)],
    });
  }

  get searchName() {
    return this.searchForm.get("searchName");
  }

  public onSearchChange(search: string) {
    if (search.match(this.pattern)) {
      this.newSearchEvent.emit(search.toLowerCase());
    }
  }
}
