import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ViewChild
} from "@angular/core";
import { Router } from "@angular/router";
declare var item;

declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}
@Component({
  selector: "kr-login-otp",
  templateUrl: "./login-otp.component.html",
  styleUrls: ["./login-otp.component.scss"]
})
export class LoginOtpComponent implements OnInit, AfterViewInit {
  otp: string;
  otpInvalid = false;

  constructor(private router: Router) {}

  @ViewChild("ngOtpInput") ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    inputClass: "code-v"
  };
  onOtpChange(otp) {
    this.otp = otp;
    if (otp.length < 4) {
      this.otpInvalid = false;
    } else {
      if (otp == "0000") {
        $(".verify-mobile-number")
          .removeClass("w_otp")
          .addClass("c_otp");

        this.router.navigate(["/plans/post-plan"]);
      } else {
        this.otpInvalid = true;
      }
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $(document).ready(function() {
      var panInterval;
      var count = 0;

      function resendbtn() {
        $("#countup").addClass("d_hidden");
        $(".verify-mobile-number").removeClass("deactive");
      }

      function myCount() {
        if (count == 30 - 1) {
          count = 0;
          resendbtn();
          clearTimer();
        } else {
          count += 1;
        }
        $(".progressbar-text .number").text(30 - count);
        $(".p_l_draw").css({
          "stroke-dashoffset": count * 9.8
        });
      }

      function setTimer() {
        panInterval = setInterval(myCount, 1000);
      }

      setTimer();

      function clearTimer() {
        clearInterval(panInterval);
      }

      $(".r-m-v-c").on("click", function() {
        count = 0;
        setTimer();
        $(".code-v").each(function() {
          $(this).val("");
        });
        $(".verify-mobile-number")
          .addClass("deactive")
          .removeClass("w_otp");
        $("#countup").removeClass("d_hidden");
        $("#codeBox1").focus();
      });
    });
  }
}
