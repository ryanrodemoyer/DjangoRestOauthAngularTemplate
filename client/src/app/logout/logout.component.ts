import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoggedIn: BehaviorSubject<boolean>;

  constructor(private authService: AuthService, private readonly router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn$;
  }

  logoutClick() {
    this.authService.logout();

    this.router.navigate(['login']);
  }
}
