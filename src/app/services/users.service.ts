import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data, { responseType: 'text' as 'json' });
  }

  getAllUsers(data: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`, { params: data });
  }

}
