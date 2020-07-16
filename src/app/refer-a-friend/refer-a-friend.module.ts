import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReferAFriendRoutingModule } from "./refer-a-friend-routing.module";
import { ReferAFriendComponent } from "./refer-a-friend/refer-a-friend.component";
import { DeviceDetectorModule } from "ngx-device-detector";

@NgModule({
  declarations: [ReferAFriendComponent],
  imports: [CommonModule, ReferAFriendRoutingModule]
})
export class ReferAFriendModule {}
