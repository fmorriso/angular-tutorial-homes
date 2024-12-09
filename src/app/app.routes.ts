import { Routes } from '@angular/router';
//
import { HomeComponent } from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routeConfig: Routes = [
  { path: 'home', component: HomeComponent, title:'Home Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details Page' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
