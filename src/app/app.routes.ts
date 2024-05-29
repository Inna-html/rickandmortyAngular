import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { characterResolver, episodResolver, locationResolver } from './services/resolvers';


export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: 'home-page', pathMatch: 'full' },
            { path: 'home-page', component: HomePageComponent },
            {
                path: 'characters', component: CharactersComponent,
                resolve: { characterResolver },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
            },
            {
                path: 'locations', component: LocationsComponent,
                resolve: { locationResolver },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
             },
            {
                path: 'episodes', component: EpisodesComponent,
                resolve: { episodResolver },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
             },
        ]
    }
];
