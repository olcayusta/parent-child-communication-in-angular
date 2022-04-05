import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonComponent implements OnInit {
  @Output() login = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
