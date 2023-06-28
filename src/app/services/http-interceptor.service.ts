import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http'
import { DataService } from './data.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if(this.dataService.serverToken === null) {
            return next.handle(req);
        }
        const token = this.dataService.serverToken
        const modifiedReq = req.clone({params: new HttpParams().set('auth', token)})
        return next.handle(modifiedReq);
    }

    constructor(private dataService: DataService) {}
}