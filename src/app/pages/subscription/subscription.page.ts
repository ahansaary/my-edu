import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { SummaryComponent } from './summary/summary.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    SubscribeFormComponent,
    SummaryComponent,
  ],
})
export class SubscriptionPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
