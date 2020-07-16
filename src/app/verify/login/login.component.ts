import { Component, OnInit, AfterViewInit } from "@angular/core";
declare const $: any;
interface KeyboardEvent {
  code: string;
}
declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: "kr-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const { $ } = window;
    function isNumberKey(evt) {
      var charCode = evt.which;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
      return true;
    }

    function phonenumber(num) {
      var phoneno = /^[7-9][0-9]{9}$/;
      if (num.match(phoneno)) {
        $(".i_e")
          .removeClass("w_number")
          .addClass("c_number");
        setTimeout(function() {
          window.location.assign("/verify/login-otp");
        }, 1000);
      } else {
        $(".i_e")
          .removeClass("c_number")
          .addClass("w_number");
      }
    }

    $(document).ready(function() {
      $(".i_e input").keyup(function() {
        var a = $(this)
          .val()
          .trim().length;
        if (a == 10) {
          phonenumber($(this).val());
        } else {
          $(".i_e")
            .removeClass("c_number")
            .removeClass("w_number");
        }
      });
    });
  }
}
