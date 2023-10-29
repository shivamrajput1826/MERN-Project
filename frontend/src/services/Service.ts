/* eslint-disable @typescript-eslint/no-explicit-any */
interface IHttpRequest {
  path?: string;
  method?: string;
  headers?: Record<any, any>;
  body?: any;
  params?: Record<string, any>;
}

enum httpMethods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export class Service {
  constructor(private baseUrl: string) {}
  protected async httpRequests?(request: IHttpRequest): Promise<any>;

  // Add the 'fetch' method
  protected async fetch<T = any>(request: IHttpRequest): Promise<T> {
    const fullUrl = request?.path
      ? `${this.baseUrl}${request.path}`
      : this.baseUrl;
    const options: IHttpRequest = {
      method: request?.method,
      headers: request?.headers,
      params: request?.params,
    };
    if (request.method !== httpMethods.GET && request.body) {
      options.body = JSON.stringify(request.body);
    }
    if (request.headers === undefined) {
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    try {
      console.log(fullUrl, options);
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status:${response.status}`);
      }
      const responseData: T = await response.json();
      return responseData;
    } catch (error: any) {
      throw new Error(`Network Error:${error.message}`);
    }
  }

  protected get<T = any>(
    path: string,
    params?: Record<string, any>,
    headers?: Record<any, any>
  ): Promise<T> {
    return this.fetch<T>({
      path,
      method: httpMethods.GET,
      params,
      headers,
    });
  }

  protected post<T = any>(
    path: string,
    body: any,
    params?: Record<string, any>,
    headers?: Record<any, any>
  ) {
    return this.fetch<T>({
      path,
      method: httpMethods.POST,
      params,
      body,
      headers,
    });
  }

  protected put<T = any>(
    path: string,
    body: any,
    params?: Record<string, any>,
    headers?: Record<any, any>
  ) {
    return this.fetch<T>({
      path,
      method: httpMethods.PUT,
      body,
      params,
      headers,
    });
  }

  protected delete<T = any>(
    path: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<any, any>
  ) {
    return this.fetch<T>({
      path,
      method: httpMethods.DELETE,
      params,
      body,
      headers,
    });
  }
}
