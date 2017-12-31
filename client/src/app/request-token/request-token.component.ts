import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import { OauthResponseModel } from '../oauth-response.model';

@Component({
  selector: 'app-request-token',
  templateUrl: './request-token.component.html',
  styleUrls: ['./request-token.component.css']
})
export class RequestTokenComponent implements OnInit {
  grant_type = 'password';
  username = 'rpouser';
  password = 'thisrpopassword';
  client_id = '2VqEM1ftXZd7tyePnvFluMyT1cuTEKXN5oNUWBl1';

  token: OauthResponseModel;

  constructor(private authService: AuthService) {

  }

  public submitMyForm(form: NgForm) {
    this.authService.token$.subscribe(x => {
        this.token = x;
    });

    this.authService.requestToken(form.value);

    console.log(`token=${JSON.stringify(this.token)}`);
  }

  ngOnInit() {
  }
}
