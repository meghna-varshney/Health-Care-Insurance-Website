import { Component, OnInit, AfterViewInit } from "@angular/core";
declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: "kr-post-home",
  templateUrl: "./post-home.component.html",
  styleUrls: ["./post-home.component.scss"]
})
export class PostHomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const { $ } = window;

    if ($(".sliderBanner").length) {
      $(".sliderBanner").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplayHoverPause: true,
        autoplay: true,
        slideSpeed: 100,
        mouseDrag: true,
        singleItem: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        autoplayTimeout: 8000,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          600: {
            items: 1,
            nav: false
          },
          1000: {
            items: 1,
            nav: false,
            /* loop: false, */
            margin: 0
          }
        }
      });
    }
  }
}
