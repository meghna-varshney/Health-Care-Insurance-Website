import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppConstants {
  //   readonly API_URL: string = environment.kenkoRedapiUrl;
  //   readonly KENKO_ORANGE_API_URL: string = environment.kenkoOrangeApiUrl;
  //   readonly TOKEN: string = environment.kenkoRedToken;
  //   readonly KENKO_ORANGE_TOKEN: string = environment.kenkoOrangeToken;
  //   readonly KENKO_SCORE: number = environment.kenkoScore;
  //   readonly KENKO_CREDIT_SCORE: number = environment.kenkoCreditScore;
  //   readonly SNACKBAR_TIME_DURATION: number = 5000;

  // readonly headerContentType: "Content-Type";
  // readonly contentTypeJson: "application/x-www-form-urlencoded",
  // readonly contentTypeJson: "application/json";
  // readonly contentTypeImage: "multipart/form-data";
  // readonly headerAuthorization: "token";
  readonly USER_DATA = "user_data";
  readonly TOKEN = "token";
}
