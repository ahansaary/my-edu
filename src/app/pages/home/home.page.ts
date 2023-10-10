import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DiscoverComponent } from './discover/discover.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DiscoverComponent,
  ],
})
export class HomePage {
  constructor() {}
}
