import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;
  constructor(private apiService:ApiService){}
  
  
  logout(): void {
    this.apiService.logout();
  }


  // fetchUserProfile(): void {
  //   this.apiService.getUserProfile().subscribe({
  //     next: (response) => {
  //       console.log('User Profile:', response); 
  //       this.user = response; 
  //     },
  //     error: (error) => {
  //       console.log('Error fetching user profile', error);
  //     }
  //   });
  // }
}
