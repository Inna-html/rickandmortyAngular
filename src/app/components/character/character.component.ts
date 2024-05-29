import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICharacter } from '../../interfaces';


@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  @Input()
  character: ICharacter;
}
