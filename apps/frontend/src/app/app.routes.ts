import { Route } from "@angular/router";
import { PeopleListComponent } from "./components/people-list/people-list.component";

export const appRoutes: Route[] = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./components/people-list/people-list.module").then(
        (m) => m.PeopleListRoutingModule
      ),
  },
];
