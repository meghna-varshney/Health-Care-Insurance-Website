import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "kr-post-plan-det",
  templateUrl: "./post-plan-det.component.html",
  styleUrls: ["./post-plan-det.component.scss"],
})
export class PostPlanDetComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const { $ } = window;

    $(".linkMore a").click(function () {
      var close = $(this).attr("open-data");
      var open = $(this).attr("close-data");
      $(this).toggleClass("dataMore");
      $(this)
        .parents(".linkMore")
        .siblings(".listingData")
        .find("li:nth-child(2)")
        .nextAll()
        .toggle();
      if ($(this).hasClass("dataMore")) {
        $(this).text(open);
      } else {
        $(this).text(close);
      }
    });

    if ($(".bp_s_con").length) {
      $(".bp_s_con").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 3,
            nav: false,
            loop: false,
            dots: false,
            margin: 0,
          },
        },
      });
    }

    if ($(".bp_ds_con").length) {
      $(".bp_ds_con").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 3,
            nav: false,
            loop: false,
            dots: false,
            margin: 0,
          },
        },
      });
    }
  }
}
