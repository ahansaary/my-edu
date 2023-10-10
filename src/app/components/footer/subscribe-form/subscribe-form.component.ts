import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'footer-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SubscribeFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
