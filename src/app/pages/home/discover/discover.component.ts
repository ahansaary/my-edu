import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';

@Component({
  selector: 'home-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  standalone: true,
  imports: [IonicModule, SubscribeButtonComponent],
})
export class DiscoverComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
