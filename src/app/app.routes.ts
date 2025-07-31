import { Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';
import { FuncionaComponent } from './components/funciona/funciona';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'como-funciona', component: FuncionaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
