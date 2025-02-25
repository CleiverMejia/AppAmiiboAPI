import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'amiibo-detail/:name',
    loadComponent: () =>
      import('./pages/amiibo-detail/amiibo-detail.page').then(
        (m) => m.AmiiboDetailPage
      ),
  },
  {
    path: 'random',
    loadComponent: () =>
      import('./pages/random/random.page').then((m) => m.RandomPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.page').then((m) => m.FavoritesPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
