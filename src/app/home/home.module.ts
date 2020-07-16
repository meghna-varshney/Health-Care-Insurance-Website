import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OwlModule } from "ngx-owl-carousel";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { FakeApiComponent } from "./fake-api/fake-api.component";
import { PostHomeComponent } from "./post-home/post-home.component";

@NgModule({
  declarations: [HomeComponent, FakeApiComponent, PostHomeComponent],
  imports: [CommonModule, HomeRoutingModule, OwlModule]
})
export class HomeModule {}
