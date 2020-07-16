$(document).ready(function() {
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
  /* help btn widget code end */

  if ($("#feedback_form").length) {
    $("#feedback_form").validate({
      /* rules: {
                f_reason: "required",
                f_comment: "required",
            },
            messages: {
                f_reason: "Please select your feedback",
                f_comment: "Please enter your feedback comment",
            }, */

      errorPlacement: function(error, element) {
        if (element.parents(".f_i_c_b")) {
          element.parents(".f_i_c_b").after(error);
        } else {
          element.after(error); // default error placement
        }
      }
    });

    $(".unsubscibeBtn").click(function() {
      if ($("#feedback_form").valid()) {
        $(".popupForm, .confirm_box").hide();
        $(".popup-inner").addClass("bot_active");
        $("#popup_sucessesMsg").show();
      }
    });
  }

  /* loader loading click on filter page apply button*/
  $(".loadingBox").on("click", function() {
    $(".loadingCon").removeClass("activeloader");
    setTimeout(hideLoader, 2000);
  });

  function hideLoader() {
    $(".loadingCon").addClass("activeloader");
  }

  /* loader loading default */
  loadLoaderDefault();

  function loadLoaderDefault() {
    $(".loadingCon").removeClass("activeloader");
    setTimeout(hideLoader, 2000);
  }

  /* Burger menu active mode */
  $(".mob_burger_menu").on("click", function() {
    $(this)
      .parents("body")
      .addClass("noScroll")
      .find(".m_m_c_b")
      .addClass("activemenuMob");
  });

  /* Burger menu deactive mode */
  $(".close_btn_m").on("click", function() {
    $(this)
      .parents("body")
      .removeClass("noScroll")
      .find(".m_m_c_b")
      .removeClass("activemenuMob");
  });

  $(".t_i_c ul li").on("click", function() {
    var a = $(this).index();
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".tabConInner .tabContainerBox")
      .eq(a)
      .show()
      .siblings()
      .hide();
  });

  /* $(document).keyup(function(event) {
        if (event.which == '27') {
            $('body').removeClass('scrollNone');
            $('.popup-overlay').hide();
        }
    }); */

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
          margin: 0
        }
      }
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
          margin: 0
        }
      }
    });
  }

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

  // Video Play Onclick Image
  if ($(".play-youtube-video").length) {
    $(".play-youtube-video").on("click", function() {
      var youtubecl = $(this).parents(".youtube-video-place");
      youtubecl.append(
        '<iframe allow="autoplay; encrypted-media" allowfullscreen frameborder="0" class="embed-responsive-item" src="' +
          youtubecl.data("yt-url") +
          '"></iframe>'
      );
      $(youtubecl).addClass("active-video");
    });
  }
  //Tap to Copy Text
  /*   if($('.cupon-code-text').length){
      var copyText = document.querySelector('.cupon-code-text');
      if(copyText !== null && copyText.length != 0) {
      copyText.onclick = function() {
        document.execCommand("copy");
      }
      copyText.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", copyText.textContent);
          //console.log(event.clipboardData.getData("text"))
        }
      });
    }
    } */

  $(".c_i_container").click(function() {
    var checkbox = $(this).find("span input");
    //checkbox.trigger('click');
    if (checkbox.is(":checked")) {
      $(this)
        .find("span")
        .addClass("active");
    } else {
      $(this)
        .find("span")
        .removeClass("active");
    }
  });

  $(".user_profile_container").on("click", ".userProfile", function() {
    $(this)
      .parent()
      .addClass("active");
  });

  $(document).click(function(e) {
    if (!$(e.target).is(".user_profile_container, .user_profile_container *")) {
      $(".user_profile_container").removeClass("active");
    }
  });
});

function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function ischarKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 32 ||
    charCode == 8 ||
    charCode == 46
  )
    return true;
  else return false;
}

function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 4) {
      getCodeBoxElement(index + 1).focus();
    } else {
      //getCodeBoxElement(index).blur();
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}

function onFocusEvent(index) {
  for (item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}
