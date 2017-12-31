import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: BehaviorSubject<boolean>;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.loggedIn$;
  }

}
