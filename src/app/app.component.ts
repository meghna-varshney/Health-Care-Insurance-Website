import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  ActivatedRoute
} from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
@Component({
  selector: "kr-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "kenko-red";
  loading = true;
  loggedIn: boolean;
  hideBtn: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loading = false;
        }, 700);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        setTimeout(() => {
          this.loading = false;
        }, 700);

        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.route),
        map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter(route => route.outlet === "primary"),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        this.loggedIn = data.loggedIn;
        this.hideBtn = data.hideBtn;
      });
  }
}
