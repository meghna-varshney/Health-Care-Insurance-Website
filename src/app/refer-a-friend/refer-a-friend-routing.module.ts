import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReferAFriendComponent } from "./refer-a-friend/refer-a-friend.component";

const routes: Routes = [
  {
    path: "refer-a-friend",
    component: ReferAFriendComponent,
    data: {
      loggedIn: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferAFriendRoutingModule {}
