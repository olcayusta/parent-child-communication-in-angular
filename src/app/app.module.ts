import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LogoutButtonComponent} from './logout-button/logout-button.component';
import {LoginButtonComponent} from './login-button/login-button.component';
import { GreetingComponent } from './greeting/greeting.component';
import { UserGreetingComponent } from './user-greeting/user-greeting.component';
import { GuestGreetingComponent } from './guest-greeting/guest-greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutButtonComponent,
    LoginButtonComponent,
    GreetingComponent,
    UserGreetingComponent,
    GuestGreetingComponent,
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
