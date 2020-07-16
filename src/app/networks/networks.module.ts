import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NetworksRoutingModule } from "./networks-routing.module";
import { DoctorsComponent } from "./doctors/doctors.component";
import { HospitalsComponent } from "./hospitals/hospitals.component";
import { PostHospitalComponent } from "./post-hospital/post-hospital.component";
import { PostDoctorsComponent } from "./post-doctors/post-doctors.component";

@NgModule({
  declarations: [
    DoctorsComponent,
    HospitalsComponent,
    PostHospitalComponent,
    PostDoctorsComponent,
  ],
  imports: [CommonModule, NetworksRoutingModule],
})
export class NetworksModule {}
