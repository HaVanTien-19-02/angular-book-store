import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const copiedReq = request.clone({headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)});
    // if (request.url.indexOf('/login') < 0) {
    //   return next.handle(copiedReq);
    // }
    return next.handle(request);
  }
}
