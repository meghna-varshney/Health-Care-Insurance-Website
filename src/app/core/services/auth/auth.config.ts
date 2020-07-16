/** User resources */

import { IResourceApi } from "../resource/resource.interface";
import { HttpMethods } from "../resource/resource.enum";

export const login: IResourceApi = {
  uri: "/Login/loginUser",
  method: HttpMethods.POST
};
export const logout: IResourceApi = {
  uri: "/logout",
  method: HttpMethods.POST
};
