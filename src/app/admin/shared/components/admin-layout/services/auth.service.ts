import { User } from '../../../../../shared/components/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get token():string{
      return ''
  }

  login(user: User) :Observable<any>{
   return  this.http.post('', user);
  }

  logout() {}

  isAuthtenticated(): boolean {
    return !!this.token;
  }
  private setToken(){

  }
}
