import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardPendingComponent } from "./dashboard-pending/dashboard-pending.component";

@NgModule({
  declarations: [DashboardComponent, DashboardPendingComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
