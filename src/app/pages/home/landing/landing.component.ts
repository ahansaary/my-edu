import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SubscribeButtonComponent } from '../subscribe-button/subscribe-button.component';

@Component({
  selector: 'home-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [IonicModule, SubscribeButtonComponent],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
