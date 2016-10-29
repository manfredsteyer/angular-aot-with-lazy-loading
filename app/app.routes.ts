import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'flug-buchen',
        loadChildren: './flug/flug.module#FlugModule'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

