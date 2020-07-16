import { Component, OnInit, AfterViewInit } from "@angular/core";
declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}
@Component({
  selector: "kr-active-plan",
  templateUrl: "./active-plan.component.html",
  styleUrls: ["./active-plan.component.scss"]
})
export class ActivePlanComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const { $ } = window;
    $(document).ready(function() {
      $(".planListingCon .i_b_grid").click(function(e) {
        var sc = $(this)
          .parents(".listGrid")
          .find(".i_b_grid");
        sc.parents(".planListingCon")
          .siblings(".planListingCon")
          .removeClass("activePack")
          .find(".i_b_grid")
          .removeClass("active-gride");
        var a = $(".r-f-e-btn-box").outerHeight();
        if (sc.hasClass("active-gride")) {
          sc.removeClass("active-gride")
            .parents(".planListingCon")
            .removeClass("activePack");
          $(".filter_pad_bot footer").css({
            "padding-bottom": "0px"
          });
        } else {
          sc.addClass("active-gride")
            .parents(".planListingCon")
            .addClass("activePack");
          scrollBody();
        }
      });

      $(".checkboxCon label").click(function() {
        var prnt = $(this).parents(".c_i_container");
        $(this)
          .parents(".c_i_container")
          .toggleClass("active");
        if (prnt.hasClass("active")) {
          prnt.find("input").prop("checked", false);
        } else {
          prnt.find("input").prop("checked", true);
        }
      });

      $(".uncheckall").click(function() {
        $(".c_i_container").removeClass("active");
        $(":checkbox").attr("checked", false);
      });

      function fixedFilter() {
        var getWindowwidth = $(window).width();
        if (getWindowwidth <= 767) {
          var hdrHt = $(".headetTop").height();
          var getOffset = $(".f_c_b").offset().top;
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > getOffset) {
              $(".f_c_b")
                .addClass("active")
                .css({
                  top: hdrHt
                });
            } else {
              $(".f_c_b")
                .removeClass("active")
                .css({
                  top: "auto"
                });
            }
          });
        }

        if (getWindowwidth > 767) {
          $(".f_c_b").removeClass("active");
        }
      }

      fixedFilter();

      // if ($('.filter_pad_bot').length) {
      //scrollBody();
      var resizer;
      $(window).on("resize", function(e) {
        clearTimeout(resizer);
        resizer = setTimeout(function() {
          scrollBody();
          // console.log("data")
        }, 250);
      });
      // }

      function scrollBody() {
        if ($(window).width() <= 767) {
          if ($(".r-f-e-btn-box").is(":visible")) {
            var a = $(".r-f-e-btn-box").outerHeight();
            var a = a + 20;
          }
          $(".filter_pad_bot").addClass("padIncrease");
          $(".padIncrease footer").css({
            "padding-bottom": a
          });
          // console.log("mobile")
        } else {
          $(".filter_pad_bot").removeClass("padIncrease");
          $(".filter_pad_bot footer").css({
            "padding-bottom": "0px"
          });
          // console.log("tab desktop")
        }
      }

      var resizeTimer;
      $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fixedFilter, 100);
      });

      //filter pop open popupContainer closebtn
      $(".t_f_f_c h6").click(function() {
        $(this)
          .parents("body")
          .addClass("filter_scrollNone");
        $(this)
          .parents("body")
          .find(".p_b_f_c")
          .addClass("activeFilter");
      });

      $(".closebtn-c").click(function() {
        $(this)
          .parents("body")
          .removeClass("filter_scrollNone");
        $(this)
          .parents(".p_b_f_c")
          .removeClass("activeFilter");
      });
    });
  }
}
