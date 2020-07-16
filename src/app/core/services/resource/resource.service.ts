import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IResourceApi, IResourcePayload } from "./resource.interface";
import { catchError, tap, map, last } from "rxjs/operators";
import { HttpMethods } from "./resource.enum";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root"
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  public request(
    api?: IResourceApi,
    payload?: IResourcePayload
  ): Observable<any> {
    const response = this.sendRequest(api, payload);
    return this.handleResponse(response);
  }

  private sendRequest(
    api?: IResourceApi,
    payload?: IResourcePayload
  ): Observable<any> {
    return this.http.request(
      HttpMethods[api.method],
      `${environment.apiUrl}/${api.uri}`,
      { ...payload, observe: api.observe || "response" }
    );
  }

  private handleResponse(response: any): Observable<any> {
    return response.pipe(
      map((res: any) => res.body),
      // tap(res => console.log("from tap", res)),
      // last(), // return last (completed) message to caller
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
