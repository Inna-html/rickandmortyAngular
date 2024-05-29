import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import { IEpisode } from '../../interfaces';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodeComponent } from '../episode/episode.component';


@Component({
  selector: 'app-episodes',
  standalone: true,
  imports: [CommonModule, EpisodeComponent,
    MatIconModule, MatPaginatorModule, MatPaginator
  ],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent implements OnInit {
  episodes: IEpisode[];
  filteredEpisode!: IEpisode[];

  inputValue: string

  length: number;
  pageSize: 20;
  pageIndex: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('inputValue') inputValueInput: any; 

constructor(
  public episodesService: EpisodesService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.getEpisodes();
  }


  getEpisodes() {
    this.activatedRoute.queryParams.subscribe(({ page }) => {
      this.episodesService.getAll(page).subscribe(res => {
        this.length = res.info.count;
        this.episodes = res.results;
        this.filteredEpisode = this.episodes;
      })
    })
  }


  handlePageEvent(e: PageEvent) {
    this.router.navigate([], { queryParams: { page: e.pageIndex + 1 } })

    console.log(e);
  }

  
  onSearchInputChange(value: string) {
    this.filteredEpisode = this.episodes.filter((episode) =>
      episode.name.toLowerCase().includes(value.toLowerCase()))
      
    if (!this.inputValue) {
  this.router.navigate(['/episodes']);
    }
  }


  clearInput() {
    // Clear the input field
    this.inputValueInput.nativeElement.value = '';
  }
  
}
  
