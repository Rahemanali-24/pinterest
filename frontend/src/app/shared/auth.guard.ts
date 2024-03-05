import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../shared/api.service'; // Import the ApiService or any service used for authentication

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router) {}
  canActivate(): boolean {
    console.log('AuthGuard canActivate');
    const isLoggedIn = this.apiService.isLoggedIn();
    console.log('Is logged in:', isLoggedIn);
    if (isLoggedIn) { 
      return true; 
    } else {
      this.router.navigate(['/login']); 
      return false; 
    }
  }
}
