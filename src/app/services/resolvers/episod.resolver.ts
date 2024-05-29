import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { IEpisode, IPaginatedData } from '../../interfaces';
import { EpisodesService } from '../episodes.service';


export const episodResolver: ResolveFn<IPaginatedData<IEpisode>> =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const page = route.queryParams['page']
    return inject(EpisodesService).getAll(page);
};
