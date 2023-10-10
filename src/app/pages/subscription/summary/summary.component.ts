import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'subscription-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SummaryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
