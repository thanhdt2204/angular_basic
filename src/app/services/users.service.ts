import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { UserPage } from '../models/userPage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/login`, data, { responseType: 'text' as 'json' });
  }

  getAllUsers(data: any): Observable<UserPage> {
    return this.http.get<UserPage>(`${this.baseUrl}/users`, { params: data });
  }

  deleteUser(email: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/user/${email}`);
  }

  saveUser(data: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user`, data);
  }

}
