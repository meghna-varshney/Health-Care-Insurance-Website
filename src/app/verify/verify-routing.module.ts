import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LoginOtpComponent } from "./login-otp/login-otp.component";
import { NotifyLoginComponent } from "./notify-login/notify-login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: {
      hideBtn: true
    }
  },
  {
    path: "login-otp",
    component: LoginOtpComponent,
    data: {
      hideBtn: true
    }
  },
  {
    path: "notify-login",
    component: NotifyLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyRoutingModule {}
