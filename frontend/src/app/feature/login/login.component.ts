import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  username: string = '';
  constructor(private apiService: ApiService,private router:Router) {}
  
  loginUser(): void {
    this.apiService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Response:', response); 
        // Assuming response contains a token upon successful login
        localStorage.setItem('token', response.token);
        this.router.navigate(['profile']);
      },
      error: (error) => {
        console.log('Error occurred during login', error);
        if (error.status === 401) {
          alert('Invalid credentials. Please try again.');
        }
      }
    });
  }
}
