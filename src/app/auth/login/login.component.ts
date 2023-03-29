import { Component } from '@angular/core';
import { LoginForm } from '../../interfaces/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  message: string = '';
  messageBackground: string = '';

  submit() {
    if (this.form.password === '' || this.form.email === '') {
      this.messageBackground = 'red';
      this.message = 'Fill in all fields';
      return;
    }

    this.authService.login(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
