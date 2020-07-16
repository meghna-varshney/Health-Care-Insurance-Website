import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUser, IAuthToken } from "./auth.interface";
import { AppConstants } from "../app.contacts";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: IUser;
  sessionToken: IAuthToken;
  redirectUrl: string;

  constructor(private _constant: AppConstants) {}
}
