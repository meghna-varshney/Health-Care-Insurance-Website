import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DoctorCarouselItem, DoctorCarousel } from "./doctors.carousel.data";
declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: "kr-doctors",
  templateUrl: "./doctors.component.html",
  styleUrls: ["./doctors.component.scss"],
})
export class DoctorsComponent implements OnInit, AfterViewInit {
  doctorCarousel: DoctorCarouselItem[] = DoctorCarousel;
  constructor() {}

  selectedDoctor: DoctorCarouselItem;

  showInDialog(doctor: DoctorCarouselItem) {
    this.selectedDoctor = doctor;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const { $ } = window;
    $(document).ready(function () {
      $(".popupContainer").click(function () {
        $(this).parents("body").addClass("scrollNone");
        $(this).parents("body").find(".popup-overlay").show();
      });

      $(".closebtn").click(function () {
        $("#da_formContainerBox, .p_d_d_c_b").removeClass("dis_active");
        $("#da_sucessesMsg").removeClass("active");
        $(this)
          .parents(".c_c_g_b")
          .find(".r_f_c_b")
          .removeClass("active")
          .parents(".help_c_t_f_n_c_call_now")
          .siblings(".f_c_b_m")
          .removeClass("active");
        $(this).parents("body").removeClass("scrollNone help_scrollNone");
        $(this).parents(".popup-overlay").hide();
        $(".popup-inner").removeClass("bot_active");
      });
    });

    if ($("#requestCall").length) {
      $("#requestCall").validate({
        rules: {
          mobile: "required",
        },
        messages: {
          mobile: "Please enter your mobile number",
        },

        errorPlacement: function (error, element) {
          if (element.parents(".f_i_c_b")) {
            element.parents(".f_i_c_b").after(error);
          } else {
            element.after(error);
            // default error placement
          }
        },
      });

      $("#submitForm").click(function () {
        if ($("#requestCall").valid()) {
          $("#formContainerBox").addClass("dis_active");
          $("#sucessesMsg").addClass("active");
        }
      });
    }
  }
}
