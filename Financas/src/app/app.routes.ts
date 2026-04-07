import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gastos',
    loadComponent: () => import('./gastos/gastos.page').then( m => m.GastosPage)
  },
  {
    path: 'minhas-contas',
    loadComponent: () => import('./minhas-contas/minhas-contas.page').then( m => m.MinhasContasPage)
  },
  
];
