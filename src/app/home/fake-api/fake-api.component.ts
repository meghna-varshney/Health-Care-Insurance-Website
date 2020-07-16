import { Component, OnInit } from "@angular/core";
import { ResourceService } from "@resource/resource.service";
import { IResourceApi, IResourcePayload } from "@resource/resource.interface";
import { HttpMethods } from "@resource/resource.enum";
import { AuthService } from "@auth/auth.service";

@Component({
  selector: "kr-fake-api",
  templateUrl: "./fake-api.component.html",
  styleUrls: ["./fake-api.component.scss"]
})
export class FakeApiComponent implements OnInit {
  constructor(
    private resourceService: ResourceService,
    private authService: AuthService
  ) {}

  getApi(): void {
    const api: IResourceApi = {
      uri: "posts",
      method: HttpMethods.GET
    };
    this.resourceService.request(api).subscribe(data => console.log(data));
  }

  getApiPayload(): void {
    const api: IResourceApi = {
      uri: "posts",
      method: HttpMethods.GET
    };
    const payload: IResourcePayload = {
      params: {
        id: 1
      }
    };
    this.resourceService
      .request(api, payload)
      .subscribe(data => console.log(data));
  }

  postApi(): void {
    const api: IResourceApi = {
      uri: "posts",
      method: HttpMethods.POST
    };

    const payload: IResourcePayload = {
      body: {
        title: "foo",
        body: "bar",
        userId: 1
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    this.resourceService
      .request(api, payload)
      .subscribe(data => console.log(data));
  }

  putApi(): void {
    const api: IResourceApi = {
      uri: "posts/1",
      method: HttpMethods.PUT
    };
    const payload: IResourcePayload = {
      body: {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    this.resourceService
      .request(api, payload)
      .subscribe(data => console.log(data));
  }

  patchApi(): void {
    const api: IResourceApi = {
      uri: "posts/1",
      method: HttpMethods.PATCH
    };
    const payload: IResourcePayload = {
      body: {
        title: "foo"
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    this.resourceService
      .request(api, payload)
      .subscribe(data => console.log(data));
  }

  deleteApi(): void {
    const api: IResourceApi = {
      uri: "posts/1",
      method: HttpMethods.DELETE
    };
    this.resourceService.request(api).subscribe(data => console.log(data));
  }

  ngOnInit(): void {
    // this.getApi();
    this.getApiPayload();
    // this.postApi();
    // this.putApi();
    // this.patchApi();
    // this.deleteApi();
  }
}
