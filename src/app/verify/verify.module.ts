import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VerifyRoutingModule } from "./verify-routing.module";
import { LoginComponent } from "./login/login.component";
import { LoginOtpComponent } from "./login-otp/login-otp.component";
import { NotifyLoginComponent } from "./notify-login/notify-login.component";
import { KeyupDirective } from "./login-otp/keyup.directive";
import { NgOtpInputModule } from "ng-otp-input";

@NgModule({
  declarations: [
    LoginComponent,
    LoginOtpComponent,
    NotifyLoginComponent,
    KeyupDirective
  ],
  imports: [CommonModule, VerifyRoutingModule, NgOtpInputModule]
})
export class VerifyModule {}
