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
    path: 'minhas-contas',
    loadComponent: () => import('./minhas-contas/minhas-contas.page').then( m => m.MinhasContasPage)
  },
  {
    path: 'cadastro-conta',
    loadComponent: () => import('./cadastro-conta/cadastro-conta.page').then( m => m.CadastroContaPage)
  },
  
];
