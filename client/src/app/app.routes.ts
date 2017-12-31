import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HiddenComponent } from './hidden/hidden.component';
import { RequestTokenComponent } from './request-token/request-token.component';
import { LogoutComponent } from './logout/logout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { DefaultApplicationComponent } from './default-application/default-application.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'request-token',
    component: RequestTokenComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'application',
    component: DefaultApplicationComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'hidden',
    component: HiddenComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
];
