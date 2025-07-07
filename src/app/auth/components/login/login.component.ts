import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoginFormModel } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm: LoginFormModel = {
    Email : '',
    Password: '',
  };
  
  onSubmit(){
    this.authService.login(this.loginForm).subscribe({
      next: (createdPost: any) => {
        console.log('User was login:', createdPost);
        
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error('Error due trying to login:', err);
      }
    });
  }  
}
