import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardPendingComponent } from "./dashboard-pending/dashboard-pending.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: {
      loggedIn: true
    }
  },
  {
    path: "dashboard-pending",
    component: DashboardPendingComponent,
    data: {
      loggedIn: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
