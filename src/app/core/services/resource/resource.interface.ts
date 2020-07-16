import { HttpMethods, ResponseType, FreeData } from "./resource.enum";

export interface IResourceApi {
  uri: string;
  method: HttpMethods;
  responseType?: ResponseType;
  observe?: any; // response, body, events
  reportProgress?: boolean;
}

export interface IResourcePayload {
  body?: any;
  headers?: { [name: string]: any };
  params?: { [name: string]: any };
  formData?: FreeData;
}

export interface IResourceMedia {
  uri: string;
}
