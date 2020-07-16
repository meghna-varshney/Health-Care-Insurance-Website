import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NoInternetComponent } from "./no-internet/no-internet.component";

@NgModule({
  declarations: [NotFoundComponent, NoInternetComponent],
  imports: [CommonModule]
})
export class CoreModule {}
