import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { ILocation, IPaginatedData } from '../../interfaces';
import { LocationsService } from '../locations.service';


export const locationResolver: ResolveFn<IPaginatedData<ILocation>> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const page = route.queryParams['page']
    return inject(LocationsService).getAll(page);
};

