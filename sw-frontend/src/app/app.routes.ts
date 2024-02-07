import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
      path: 'home',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
      path: 'surfboards',
      loadComponent: () => import('./surfboards/surfboards.component').then(m => m.SurfboardsComponent)
    },
    {
      path: 'wetsuits',
      loadComponent: () => import('./websuits/websuits.component').then(m => m.WebsuitsComponent)
    },
    {
      path: 'spots',
      loadComponent: () => import('./spots/spots.component').then(m => m.SpotsComponent)
    }]
    