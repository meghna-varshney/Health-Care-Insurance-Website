import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DeviceDetectorModule } from "ngx-device-detector";
declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}
let newVariable: any;

newVariable = window.navigator;
@Component({
  selector: "kr-refer-a-friend",
  templateUrl: "./refer-a-friend.component.html",
  styleUrls: ["./refer-a-friend.component.scss"]
})
export class ReferAFriendComponent implements OnInit {
  deviceInfo = null;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const { $ } = window;

    $(document).ready(function() {
      $(".invite-info-box").hide();
      $(".js-share").show();

      $(".js-share").hide();
      $(".invite-info-box").show();

      //console.log(detector)
    });

    $(".share-toggle").click(function(event) {
      $(this)
        .siblings()
        .addClass("active");
    });

    $(document).click(function(e) {
      if (!$(e.target).is(".share-list, .share-list *, .share-toggle")) {
        $(".share-list").removeClass("active");
      }
    });

    function copyToClipboard(element) {
      var $temp = $("<input>");

      $(".copyDataCon").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      var msg = $("#msg_c_d").html("<p>Copied to Clipboard</p>");
      $temp.remove();
      $(".copyDataCon").append(msg);
      $(".copyDataCon").addClass("active");
      setTimeout(function() {
        $(".copyDataCon").removeClass("active");
      }, 2000);
    }

    var gCode = $("#copyTxt").text();
    var shareButton = $(".js-share");
    shareButton.on("click", function(e) {
      e.preventDefault();
      shareClick();
    });

    function shareClick() {
      if (newVariable.share) {
        newVariable
          .share({
            title: "Bringing a better share experience to the web",
            text:
              "Kenko is your new health ecosystem. Keep track of your health score, get rewarded for being healthy, and buy healthcare plans at phenomenally low monthly subscriptions.",
            url: "https://www.web.kenko-health.in/" + gCode + ""
          })
          .then(() => {
            // Any successful share logic goes here
            //console.log('dsdd')
          })
          .catch(error => {
            //alert('Couldn\'t share');
          });
      } else {
        //console.log('Share code not supported');
      }
    }

    $(".linkMore a").click(function() {
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
    /* for footer bottom spacing if help widget is active */
    if ($(".a_s_b_c_b").length) {
      scrollBody();
      var resizeTimer;
      $(window).on("resize", function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          scrollBody();
        }, 250);
      });
    }

    function scrollBody() {
      if ($(window).width() <= 767) {
        if ($(".go_h_f").is(":visible")) {
          var a = $(".go_h_f").outerHeight();
          var a = a + 20;
        }
        $(".a_s_b_c_b").addClass("padIncrease");
        $(".padIncrease footer").css({
          "padding-bottom": a
        });
      } else {
        $(".a_s_b_c_b").removeClass("padIncrease");
        $(".a_s_b_c_b footer").css({
          "padding-bottom": "0px"
        });
      }
    }

    /* help btn widget code start */
    $(".r_f_c_b").on("click", function() {
      $(this)
        .parents("body")
        .addClass("help_scrollNone");
      $(this)
        .addClass("active")
        .parents(".help_c_t_f_n_c_call_now")
        .siblings(".f_c_b_m")
        .addClass("active");
      $(".f_c_b_m .tel_g_d").focus();
    });

    $(".btnHelppoup").click(function() {
      $("#formContainerBox").removeClass("dis_active");
      $("#sucessesMsg").removeClass("active");
      $(this)
        .parents("body")
        .addClass("help_scrollNone");
      $(this)
        .parents("body")
        .find(".help_popup-overlay")
        .show();
      //$('.close_btn_m').trigger('click');
    });

    $(".help_closebtn").click(function() {
      $("#formContainerBox").removeClass("dis_active");
      $("#sucessesMsg").removeClass("active");
      $(this)
        .parents("body")
        .removeClass("help_scrollNone");
      $(this)
        .parents(".help_popup-overlay")
        .hide();
      $(".r_f_c_b")
        .removeClass("active")
        .parents(".help_c_t_f_n_c_call_now")
        .siblings(".f_c_b_m")
        .removeClass("active");
    });

    if ($("#requestCall").length) {
      $("#requestCall").validate({
        rules: {
          mobile: "required"
        },
        messages: {
          mobile: "Please enter your mobile number"
        },

        errorPlacement: function(error, element) {
          if (element.parents(".f_i_c_b")) {
            element.parents(".f_i_c_b").after(error);
          } else {
            element.after(error);
            // default error placement
          }
        }
      });

      $("#submitForm").click(function() {
        if ($("#requestCall").valid()) {
          $("#formContainerBox").addClass("dis_active");
          $("#sucessesMsg").addClass("active");
        }
      });
    }

    if ($("#da_requestCall").length) {
      $("#da_requestCall").validate({
        rules: {
          da_mobile: "required"
        },
        messages: {
          da_mobile: "Please enter your mobile number"
        },

        errorPlacement: function(error, element) {
          if (element.parents(".f_i_c_b")) {
            element.parents(".f_i_c_b").after(error);
          } else {
            element.after(error);
            // default error placement
          }
        }
      });

      $("#da_submitForm").click(function() {
        if ($("#da_requestCall").valid()) {
          $("#da_formContainerBox, .p_d_d_c_b").addClass("dis_active");
          $(".popup-inner").addClass("bot_active");
          $("#da_sucessesMsg").addClass("active");
        }
      });
    }
  }
}
