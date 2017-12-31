import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  password: string;
  password2: string;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  // signUp(form: NgForm) {

  // }

}
