import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { CharactersService } from '../characters.service';
import { ICharacter, IPaginatedData } from '../../interfaces';


export const characterResolver: ResolveFn<IPaginatedData<ICharacter>> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const page = route.queryParams['page']
    return inject(CharactersService).getAll(page);
  };


