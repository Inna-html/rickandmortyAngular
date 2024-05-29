import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICharacter, IPaginatedData } from '../interfaces';
import { urls } from '../configs';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  
  getAll(page = 1): Observable<IPaginatedData<ICharacter>> {
    return this.httpClient.get<IPaginatedData<ICharacter>>(urls.characters, { params: { page } })
  }
}
