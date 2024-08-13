import { Routes } from '@angular/router';
import { MainPage } from './main/main.page';
import { ProductListPage } from './product-list/product-list.page';
import { NewCollectionPage } from './new-collection/new-collection.page';
import { EclipseOriginsPage } from './eclipse-origins/eclipse-origins.page';
import { RopaMujerPage } from './ropa-mujer/ropa-mujer.page';
import { RopaHombrePage } from './ropa-hombre/ropa-hombre.page';
import { RopaInfantlPage } from './ropa-infantl/ropa-infantl.page';
import { RebajasPage } from './rebajas/rebajas.page';



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
    path: 'main',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  /* 
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then((m) => m.ProductListPage),
  },
  */
  {
    path: 'new-collection',
    loadComponent: () => import('./new-collection/new-collection.page').then((m) => m.NewCollectionPage),
  },
  {
    path: 'product-list',
    loadComponent: () => import('./product-list/product-list.page').then((m) => m.ProductListPage),
  },
  /*
  {
    path: 'new-collection/ropa-mujer',
    loadComponent: () => import('./ropa-mujer/ropa-mujer.page').then((m) => m.RopaMujerPage),
  },*/
  {
    path: 'eclipse-origins',
    loadComponent: () => import('./eclipse-origins/eclipse-origins.page').then((m) => m.EclipseOriginsPage),
  },
  {
    path: 'ropa-mujer',
    loadComponent: () => import('./ropa-mujer/ropa-mujer.page').then((m) => m.RopaMujerPage),
  },
  {
    path: 'ropa-hombre',
    loadComponent: () => import('./ropa-hombre/ropa-hombre.page').then((m) => m.RopaHombrePage),
  },
  {
    path: 'ropa-infantl',
    loadComponent: () => import('./ropa-infantl/ropa-infantl.page').then((m) => m.RopaInfantlPage),
  },
  {
    path: 'rebajas',
    loadComponent: () => import('./rebajas/rebajas.page').then((m) => m.RebajasPage),
  },
];
