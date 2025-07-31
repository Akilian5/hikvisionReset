// src/app/app.component.ts
import { Component, signal } from '@angular/core';
import { InicioComponent } from './components/inicio/inicio';  // importa cada uno
import { ProductosComponent } from './components/productos/productos';
import { FuncionaComponent } from './components/funciona/funciona';
import { ContactoComponent } from './components/contacto/contacto';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InicioComponent,
    ProductosComponent,
    FuncionaComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('HikvisionReset');
}

