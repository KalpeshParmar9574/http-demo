import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = environment.base_url;
  usersURL = environment.users_list_url;
  postUserURL = environment.post_user_url;

  constructor(private http: HttpClient) { }

  postUserData(body: UserModel) {
    try {
      return this.http.post<any>(this.baseURL + this.postUserURL, body);
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }

  getUsers() {
    try {
      return this.http.get<any>(this.baseURL + this.usersURL, {
        headers: {
          key:"vvv"
        }
      });
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }

  updateUser(userId: string, body: UserModel) {
    try {
      return this.http.put<any>(this.baseURL + this.usersURL+"/"+userId, body);
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }

  getUserDetail(id: string) {
    try {
      return this.http.get<any>(`${this.baseURL}${this.usersURL}/${id}`);
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }

}
