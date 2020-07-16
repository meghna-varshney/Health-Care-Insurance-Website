export interface IAuthToken {
  username: string;
  token: string;
}

export interface IUser {
  user_id: string;
  id?: string;
  email?: string;
  email_verified?: string;
  first_name?: string;
  full_name?: string;
  login_type?: string;
  is_mobile_verified?: string;
  mobile?: string;
  isfinish?: number;
  mobile_country_id?: string;
  signup_type?: string;
  stop_code?: string;
}
