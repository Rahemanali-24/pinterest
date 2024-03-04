import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http:HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  register(username:string,email:string,fullName:string,password:string): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,{username,email,fullName,password});
  }
}
