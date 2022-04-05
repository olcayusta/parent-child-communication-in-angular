import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-greeting',
  templateUrl: './user-greeting.component.html',
  styleUrls: ['./user-greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGreetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
