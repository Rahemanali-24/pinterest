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
  
  loginUser():void{
    this.apiService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Response:', response); 
        try {
          const jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
          console.log('Parsed JSON:', jsonResponse);   
          this.router.navigate(['profile']);         
        } catch (err) {
          console.error('Error parsing JSON:', err);
        }
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
