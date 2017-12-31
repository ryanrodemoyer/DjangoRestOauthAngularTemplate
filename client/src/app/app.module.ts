import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { RequestTokenComponent } from './request-token/request-token.component';
import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HiddenComponent } from './hidden/hidden.component';
import { APP_ROUTES } from './app.routes';
import { CommonModule } from '@angular/common/src/common_module';
import { LogoutComponent } from './logout/logout.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { DefaultApplicationComponent } from './default-application/default-application.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestTokenComponent,
    HiddenComponent,
    LogoutComponent,
    ForbiddenComponent,
    LoginComponent,
    DefaultApplicationComponent,
    NavbarComponent,
    LandingPageComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthService, HttpClient, AuthGuard],
  bootstrap: [AppComponent],
  exports: [BsDropdownModule, TooltipModule, ModalModule]
})
export class AppModule {
}
