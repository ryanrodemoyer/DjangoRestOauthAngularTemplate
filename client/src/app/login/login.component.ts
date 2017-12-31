import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;

  subscription: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit() {
    if (this.authService.authenticated) {
      this.router.navigate(['application']);
    }

    // if/when the user is logged in, redirect them to the default application page
    // this is the protected page/content that the user should initially see after a valid sign in
    this.subscription = this.authService.loggedIn$.subscribe(x => {
      if (x === true) {
        this.router.navigate(['application']);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  login(form: NgForm) {
    this.authService.login(form.value);
  }
}
