import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}
  //private authService: AuthService
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token: any = this.authService.auth ? this.authService.auth.token : "";
    const authReq = request.clone({
      // headers: request.headers.set("Content-Type", "application/json")
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer token is awesome"
      })
    });
    return next.handle(authReq).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
