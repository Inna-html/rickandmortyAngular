import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from '../configs';
import { IEpisode, IPaginatedData } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient) { }

  
  getAll(page = 1): Observable<IPaginatedData<IEpisode>> {
  return this.httpClient.get<IPaginatedData<IEpisode>>(urls.episodes, {params: {page}})
  }
}
