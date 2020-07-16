import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  HomeCarouselConfig,
  HomeCarouselItem,
  HomeCarousel
} from "./home.carousel.data";

@Component({
  selector: "kr-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  homeCarousel: HomeCarouselItem[] = HomeCarousel;

  HomeCarouselConfig: any = HomeCarouselConfig;
}
