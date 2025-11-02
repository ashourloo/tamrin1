import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutPage } from './+pages/about-page/about-page';
import { ProductsPage } from './+pages/products-page/products-page';
import { SupportPage } from './+pages/support-page/support-page';
import { ContactPage } from './+pages/contact-page/contact-page';
import { NotFoundPage } from './+pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'products', component: ProductsPage },
  { path: 'support', component: SupportPage },
  { path: 'contact', component: ContactPage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:NotFoundPage },
];
