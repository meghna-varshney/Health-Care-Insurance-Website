import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2
} from "@angular/core";

declare const $: any;
declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: "kr-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() loggedIn: boolean;
  @Input() hideBtn: boolean;

  @ViewChild("burgerMenu") burgerMenu: ElementRef;
  @ViewChild("closeNav") closeNav: ElementRef;
  @ViewChild("userProfile") userProfile: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showMobileNav(evt) {
    evt.stopPropagation();

    this.renderer.addClass(document.body, "noScroll");
    this.renderer.addClass(document.querySelector(".m_m_c_b"), "activemenuMob");
  }

  closeMobileNav(evt) {
    evt.stopPropagation();

    this.renderer.removeClass(document.body, "noScroll");
    this.renderer.removeClass(
      document.querySelector(".m_m_c_b"),
      "activemenuMob"
    );
  }

  showLogout(evt) {
    evt.stopPropagation();
    this.renderer.addClass(
      this.el.nativeElement.querySelector(".user_profile_container"),
      "active"
    );
  }

  hideLogout(evt) {
    if (this.loggedIn)
      this.renderer.removeClass(
        this.el.nativeElement.querySelector(".user_profile_container"),
        "active"
      );

    this.closeMobileNav(evt);
  }

  ngOnInit() {}

  addEvents() {
    this.burgerMenu.nativeElement.addEventListener("click", evt =>
      this.showMobileNav(evt)
    );

    this.closeNav.nativeElement.addEventListener("click", evt =>
      this.closeMobileNav(evt)
    );

    if (this.loggedIn)
      this.userProfile.nativeElement.addEventListener("click", evt =>
        this.showLogout(evt)
      );

    document.addEventListener("click", evt => this.hideLogout(evt));
  }

  ngAfterViewInit(): void {
    this.addEvents();
  }

  ngDestroy() {}
}
