import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { PlayComponent } from './components/play/play.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MenuComponent
    },
    {
        path:'play',
        pathMatch: 'full',
        component: PlayComponent
    }
];
