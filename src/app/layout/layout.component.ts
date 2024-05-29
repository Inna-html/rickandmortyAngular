import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { CharactersComponent } from '../components/characters/characters.component';
import { LocationsComponent } from '../components/locations/locations.component';
import { EpisodesComponent } from '../components/episodes/episodes.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    HeaderComponent, FooterComponent, HomePageComponent,
    CharactersComponent, LocationsComponent, EpisodesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
