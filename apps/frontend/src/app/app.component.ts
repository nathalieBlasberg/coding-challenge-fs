import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PeopleListComponent } from "./components/people-list/people-list.component";

@Component({
  standalone: true,
  imports: [PeopleListComponent, RouterModule],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Angular Star Wars";
}
