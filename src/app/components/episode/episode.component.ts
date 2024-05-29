import { Component, Input } from '@angular/core';

import { IEpisode } from '../../interfaces';


@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {

  @Input()
  episode: IEpisode;

}
