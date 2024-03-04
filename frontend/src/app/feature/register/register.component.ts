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

    // registerUser(): void {
    //   this.apiService.register(this.email, this.username, this.fullName, this.password).subscribe(
    //     (response) => {
    //       console.log('Register successful', response);
    //       this.router.navigateByUrl('/profile');

    //     },
    //     (error) => {
    //       console.error('Registration error', error);
    //     }
    //   );
    // }

    registerUser(): void {
      this.apiService.register(this.username, this.email, this.fullName, this.password).subscribe({
        next: (response) => {
          console.log('Response:', response); 
          try {
            const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
            console.log('Parsed JSON:', jsonResponse);   
            this.router.navigate(['profile']);         
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        },
        error: (error) => {
          console.log('Error occurred during registration', error);
        }
      });
    }
   
  }
