import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
  })
  export class RegisterComponent {
    constructor(private apiService: ApiService,private router: Router) {}
    email: string = '';
    username: string = '';
    fullName: string = '';
    password: string = '';
    registerUser(): void {
      this.apiService.register(this.username, this.email, this.fullName, this.password).subscribe({
        next: (response) => {
          console.log('Response:', response); 
          try {
            const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
            console.log('Parsed JSON:', jsonResponse);   
            this.router.navigate(['login']);         
          } catch (err) {
            console.error('Error parsing JSON:', err);
          }
        },
        error: (error) => {
          console.log('Error occurred during registration', error);
        }
      });
    }
   
  }
