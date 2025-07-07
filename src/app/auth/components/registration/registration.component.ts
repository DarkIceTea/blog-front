import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterFormModel } from '../../models/register.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private authService: AuthService, private router: Router) {}

  registrationForm: RegisterFormModel = {
    Email : '',
    Password: '',
    DateOfBirth: new Date(),
    UserName: ''
  };
  
  onSubmit(){
    this.authService.register(this.registrationForm).subscribe({
      next: (createdPost: any) => {
        console.log('Registration successful:', createdPost);
        
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error('Error due to login:', err);
      }
    });
  }  
}
