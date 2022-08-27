import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../utils/constant';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('/login')) {
            request = request.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            });
        } else {
            const item = JSON.parse(localStorage.getItem(Constants.storage.STORAGE_KEY) || '');
            const token = item ? item.feature_store.store.token : '';
            request = request.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                }),
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}