import {FlugEditComponent} from "./flug-edit/flug-edit.component";
import {PassagierSuchenComponent} from "./passagier-suchen/passagier.suchen.component";
import {FlugSuchenComponent} from "./flug-suchen/flug-suchen.component";
import {FlugBuchenComponent} from "./flug-buchen/flug-buchen.component";
import {RouterModule, Routes } from '@angular/router';

export const FLUG_ROUTES: Routes = [{
    path: '',
    component: FlugBuchenComponent,
    children: [
        {
            path: 'flug-suchen', // flug-buchen/flug-suchen
            component: FlugSuchenComponent
        },
        {
            path: 'passagier-suchen',
            component: PassagierSuchenComponent
        },
        {
            path: 'flug-edit/:id',
            component: FlugEditComponent
        }
    ]
}];
