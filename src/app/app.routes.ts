import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PlayComponent } from './components/play/play.component';
import { inject } from '@angular/core';
import { DataSourceToken } from './services/data-source.interface';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MenuComponent,
        resolve: {
            main: dataResolver
        }
    },
    {
        path:'play',
        pathMatch: 'full',
        component: PlayComponent,
        resolve: {
            main: dataResolver
        }
    }
];

async function dataResolver(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const dataService = inject(DataSourceToken)
    await dataService.cacheData();
}