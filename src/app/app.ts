
import { Component, signal } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';
import { FuncionaComponent } from './components/funciona/funciona';
import { ContactoComponent } from './components/contacto/contacto';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    NavbarComponent,
    FooterComponent,
    RouterOutlet 
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('HikvisionReset');
}