import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlansRoutingModule } from "./plans-routing.module";
import { PlansComponent } from "./plans/plans.component";
import { PlanDetailsComponent } from "./plan-details/plan-details.component";
import { MyPlanComponent } from "./my-plan/my-plan.component";
import { ActivePlanComponent } from "./active-plan/active-plan.component";
import { UpgradePlanComponent } from "./upgrade-plan/upgrade-plan.component";
import { PostPlansComponent } from "./post-plans/post-plans.component";
import { PostPlanDetailsComponent } from "./post-plan-details/post-plan-details.component";
import { PlanDetComponent } from './plan-det/plan-det.component';
import { PostPlanDetComponent } from './post-plan-det/post-plan-det.component';

@NgModule({
  declarations: [
    PlansComponent,
    PlanDetailsComponent,
    MyPlanComponent,
    ActivePlanComponent,
    UpgradePlanComponent,
    PostPlansComponent,
    PostPlanDetailsComponent,
    PlanDetComponent,
    PostPlanDetComponent
  ],
  imports: [CommonModule, PlansRoutingModule]
})
export class PlansModule {}
