import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutButtonComponent implements OnInit {
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
