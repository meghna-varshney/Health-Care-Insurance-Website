import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PostHomeComponent } from "./post-home/post-home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    data: {
      loggedIn: false
    }
  },
  {
    path: "post-login",
    component: PostHomeComponent,
    data: {
      loggedIn: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
