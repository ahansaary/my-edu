import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'home-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],
})
export class SubscribeButtonComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
