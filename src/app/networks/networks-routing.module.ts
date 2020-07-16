import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorsComponent } from "./doctors/doctors.component";
import { HospitalsComponent } from "./hospitals/hospitals.component";
import { PostHospitalComponent } from "./post-hospital/post-hospital.component";
import { PostDoctorsComponent } from "./post-doctors/post-doctors.component";

const routes: Routes = [
  {
    path: "doctors",
    component: DoctorsComponent
  },
  {
    path: "hospitals",
    component: HospitalsComponent
  },
  {
    path: "post-hospitals",
    component: PostHospitalComponent,
    data: {
      loggedIn: true
    }
  },
  {
    path: "post-doctors",
    component: PostDoctorsComponent,
    data: {
      loggedIn: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NetworksRoutingModule {}
