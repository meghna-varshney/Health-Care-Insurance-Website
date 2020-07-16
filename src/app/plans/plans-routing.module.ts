import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlansComponent } from "./plans/plans.component";
import { PlanDetailsComponent } from "./plan-details/plan-details.component";
import { MyPlanComponent } from "./my-plan/my-plan.component";
import { ActivePlanComponent } from "./active-plan/active-plan.component";
import { UpgradePlanComponent } from "./upgrade-plan/upgrade-plan.component";
import { PostPlansComponent } from "./post-plans/post-plans.component";
import { PostPlanDetailsComponent } from "./post-plan-details/post-plan-details.component";
import { PlanDetComponent } from "./plan-det/plan-det.component";
import { PostPlanDetComponent } from "./post-plan-det/post-plan-det.component";

const routes: Routes = [
  {
    path: "",
    component: PlansComponent,
  },
  {
    path: "post-plan",
    component: PostPlansComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "upgrade-plan",
    component: UpgradePlanComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "my-plan",
    component: MyPlanComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "active-plan",
    component: ActivePlanComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "plan-details",
    component: PlanDetailsComponent,
  },
  {
    path: "post-plan-details",
    component: PostPlanDetailsComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "plan-det",
    component: PlanDetComponent,
    data: {
      loggedIn: true,
    },
  },
  {
    path: "post-plan-det",
    component: PostPlanDetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansRoutingModule {}
