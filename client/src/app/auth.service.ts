import { Injectable, Inject } from '@angular/core';

import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { RequestTokenModel } from './request-token.model';
import { OauthResponseModel } from './oauth-response.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  token: OauthResponseModel;
  token$ = new BehaviorSubject<OauthResponseModel>(this.token);

  constructor(private http: HttpClient,
    private router: Router) {
    // If authenticated, set local profile property and update login status subject
    // If token is expired, log out to clear any data from localStorage
    if (this.authenticated) {
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  public get authenticated(): boolean {
    // Check if current date is greater than expiration
    const expiresAt = Number(localStorage.getItem('expiresAt'));
    // console.log(`expiresAt=${expiresAt}`);
    // console.log(`difference=${expiresAt - Date.now()}`);
    // console.log(`Date.now() < expiresAt = ${Date.now() < expiresAt}`);
    return Date.now() < expiresAt;
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  public logout() {
    localStorage.clear();

    this.setLoggedIn(false);
  }

  public requestToken(model: RequestTokenModel) {
    const fd = new FormData();
    fd.append('grant_type', environment.OAUTH_APPLICATION.grant_type);
    fd.append('username', model.username);
    fd.append('password', model.password);
    fd.append('client_id', environment.OAUTH_APPLICATION.client_id);

    this.http.post(environment.OAUTH_TOKEN_ENDPOINT, fd)
      .subscribe(res => {
        this.token$.next(res as OauthResponseModel);
      },
      err => {
        console.log(err);
      });
  }

  public login(model: RequestTokenModel) {
    const fd = new FormData();
    fd.append('grant_type', environment.OAUTH_APPLICATION.grant_type);
    fd.append('username', model.username);
    fd.append('password', model.password);
    fd.append('client_id', environment.OAUTH_APPLICATION.client_id);

    this.http.post(environment.OAUTH_TOKEN_ENDPOINT, fd)
      .subscribe(res => {
        // components in the app can listen for when a user is signed in or signed off
        this._setSession(res as OauthResponseModel);
      },
      err => {
        console.log(err);
      });
  }

  private _setSession(oauth) {
    localStorage.setItem('access_token', oauth.access_token);
    localStorage.setItem('expires_in', oauth.expires_in.toString());
    localStorage.setItem('refresh_token', oauth.refresh_token);
    localStorage.setItem('token_type', oauth.token_type);
    localStorage.setItem('scope', oauth.scope);

    // expires_in is how many seconds the token is valid for
    // convert expires_in to milliseconds, add it to the current time and store the time in the future when it will expire
    localStorage.setItem('expiresAt', (oauth.expires_in * 1000 + Date.now()).toString());

    // store the full token response as json instead of saving the individual properties
    localStorage.setItem('oauth', JSON.stringify(oauth));

    this.setLoggedIn(true);
  }

}
