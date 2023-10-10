import { Component, OnInit } from '@angular/core';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [SubscribeFormComponent],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
