import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-firebase-todo';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const app = initializeApp(environment.firebase);
    // const database = getFirestore(app);
  }
}
