import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guest-greeting',
  templateUrl: './guest-greeting.component.html',
  styleUrls: ['./guest-greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestGreetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
