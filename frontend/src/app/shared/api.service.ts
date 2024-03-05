import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:4000';

  constructor(private http:HttpClient,private router:Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }

  register(username:string,email:string,fullName:string,password:string): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,{username,email,fullName,password});
  }

 
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; 
  }

  logout(): void {
    localStorage.removeItem('token');
    
    this.router.navigate(['/login']);
  }

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.baseUrl}/profile`);
  }
}
