import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleListComponent } from "./people-list.component";

const routes: Routes = [{ path: "", component: PeopleListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleListRoutingModule {}
