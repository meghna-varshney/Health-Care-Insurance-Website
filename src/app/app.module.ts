import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { HeaderModule } from "./shared-modules/header/header.module";
import { HomeModule } from "./home/home.module";
import { FooterModule } from "./shared-modules/footer/footer.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpErrorInterceptor } from "./utils/httpError.interceptor";
import { SharedModule } from "./shared-modules/shared.module";
import { DeviceDetectorModule } from "ngx-device-detector";
import { NumberOnlyDirective } from "./utils/number-only.directive";

@NgModule({
  declarations: [AppComponent, NumberOnlyDirective],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
