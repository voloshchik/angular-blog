import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../admin/shared/components/admin-layout/services/auth.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthtenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token,
        },
      });
    }
    return next.handle(req).pipe(
        tap(()=>{
            console.log('interseptor')
        }),
      catchError((error: HttpErrorResponse) => {
        console.log('InterceptorError:', error);
        if(error.status===401){
            this.router.navigate(['/admin','login'],{
                queryParams:{
                    authFaild:true
                }
            })
        }
        return throwError(error);
      })
    );
  }
}
