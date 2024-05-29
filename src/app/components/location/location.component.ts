import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ILocation } from '../../interfaces';


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  @Input()
  location: ILocation;

}
