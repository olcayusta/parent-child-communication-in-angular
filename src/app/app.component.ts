import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isLoggedIn = false;

  onLogout() {
    this.isLoggedIn = false;
  }

  onLogin() {
    this.isLoggedIn = true;
  }
}
