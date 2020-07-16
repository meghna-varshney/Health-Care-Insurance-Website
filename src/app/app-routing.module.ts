import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { NoInternetComponent } from "./core/no-internet/no-internet.component";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "plans",
    loadChildren: () => import("./plans/plans.module").then(m => m.PlansModule)
  },
  {
    path: "refer-a-friend",
    loadChildren: () =>
      import("./refer-a-friend/refer-a-friend.module").then(
        m => m.ReferAFriendModule
      )
  },
  {
    path: "networks",
    loadChildren: () =>
      import("./networks/networks.module").then(m => m.NetworksModule)
  },
  {
    path: "verify",
    loadChildren: () =>
      import("./verify/verify.module").then(m => m.VerifyModule)
  },
  {
    path: "header",
    loadChildren: () =>
      import("./shared-modules/header/header.module").then(m => m.HeaderModule)
  },
  {
    path: "footer",
    loadChildren: () =>
      import("./shared-modules/footer/footer.module").then(m => m.FooterModule)
  },
  { path: "no-internet", component: NoInternetComponent },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
