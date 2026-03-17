import { Routes } from '@angular/router';
import { CatalogComponent } from './features/catalog/catalog';
import { CartComponent } from './features/cart/cart';
import { AuthComponent } from './features/auth/auth';
import { ToyDetailsComponent } from './features/toy-details/toy-details';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'toy/:id', component: ToyDetailsComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '' }
];