import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {

  categorias = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'intercomunicadores', nombre: 'Intercomunicadores IP' },
    { id: 'alarmas', nombre: 'Alarmas IP' },
    { id: 'cctv', nombre: 'Familia CCTV' }, // Agrupa: Línea CCTV, DVR/NVR, Cámaras IP
    { id: 'acceso', nombre: 'Controles de acceso' }
  ];

  categoriaSeleccionada = 'todos';

  productos = [
    { nombre: 'Intercomunicador DS-KH6320-WTE1', imagen: 'assets/img/6320-1.webp', categoria: 'intercomunicadores' },
    { nombre: 'Alarma DS-PWA64-Kit', imagen: 'assets/img/DS-PWA64-KIT-WB.webp', categoria: 'alarmas' },
    { nombre: 'Cámara IP DS-2CD1023G0E-I', imagen: 'assets/img/Hikvision-DS-2CD1023G0E-I.jpg', categoria: 'cctv' },
    { nombre: 'DVR Turbo HD 7208HQHI-K1', imagen: 'assets/img/DS-7208HQHI-K1S.jpg', categoria: 'cctv' },
    { nombre: 'Control de acceso DS-K1T804EF', imagen: 'assets/img/DS-K1T804EF.png', categoria: 'acceso' },
    { nombre: 'Kit CCTV DS-7204HQHI-K1', imagen: 'assets/img/kitHikvision.webp', categoria: 'cctv' },
    { nombre: 'Cámara Dome DS-2CD2143G0-I', imagen: 'assets/img/D_NQ_NP_758980-CBT81208665782_122024-O.webp', categoria: 'cctv' },
    { nombre: 'Intercomunicador DS-KH8350-WTE1', imagen: 'assets/img/DS-KH8350-WTE1-Space-grey-Front-view.png', categoria: 'intercomunicadores' }
  ];

  productosFiltrados = [...this.productos];

  filtrar(categoria: string) {
    this.categoriaSeleccionada = categoria;
    this.productosFiltrados = [];

    setTimeout(() => {
      this.productosFiltrados = categoria === 'todos'
        ? [...this.productos]
        : this.productos.filter(p => p.categoria === categoria);
    }, 50);
  }
}