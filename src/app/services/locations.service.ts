import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { urls } from '../configs';
import { ILocation, IPaginatedData } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient) { }


  getAll(page = 1): Observable<IPaginatedData<ILocation>> {
    return this.httpClient.get<IPaginatedData<ILocation>>(urls.locations, { params: { page } })
  }

}