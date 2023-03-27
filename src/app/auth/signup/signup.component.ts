import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RegisterForm } from '../../interfaces/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  message: string = '';
  messageBackground: string = '';
  passwordMatched: boolean = true;

  submit() {
    if (
      this.form.password === '' ||
      this.form.confirmPassword === '' ||
      this.form.email === ''
    ) {
      this.passwordMatched = false;
      this.messageBackground = 'red';
      this.message = 'Fill in all fields';
      return;
    }

    if (this.form.password !== this.form.confirmPassword) {
      this.passwordMatched = false;
      this.messageBackground = 'red';
      this.message = 'Passwords do not match';
      return;
    }

    this.authService.register(this.form);
    this.messageBackground = 'green';
    this.message = 'Registration successful';
  }
}
