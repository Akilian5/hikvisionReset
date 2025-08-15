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
    // === INTERCOMUNICADORES (5 fotos) ===
    { nombre: 'Intercomunicador', imagen: 'assets/img/intecom1.png', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador', imagen: 'assets/img/intercom2.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador', imagen: 'assets/img/intercom3.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador', imagen: 'assets/img/intercom4.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador', imagen: 'assets/img/intercom5.jpg', categoria: 'intercomunicadores' },

    // === ALARMAS (3 fotos) ===
    { nombre: 'Alarma DS-PWA64-Kit', imagen: 'assets/img/alarmas1.png', categoria: 'alarmas' },
    { nombre: 'Alarma DS-PWA96-Kit', imagen: 'assets/img/alarmas2.png', categoria: 'alarmas' },
    { nombre: 'Alarma DS-PWA32-KIT', imagen: 'assets/img/alarmas3.png', categoria: 'alarmas' },

    // === FAMILIA CCTV (6 fotos) ===
    { nombre: 'Cámara IP', imagen: 'assets/img/cctv1.png', categoria: 'cctv' },
    { nombre: 'DVR Turbo HD', imagen: 'assets/img/cctv2.jpg', categoria: 'cctv' },
    { nombre: 'Cámara Dome', imagen: 'assets/img/cctv3.png', categoria: 'cctv' },
    { nombre: 'Kit CCTV', imagen: 'assets/img/cctv4.jpg', categoria: 'cctv' },
    { nombre: 'NVR', imagen: 'assets/img/cctv5.jpg', categoria: 'cctv' },
    { nombre: 'Cámara PTZ', imagen: 'assets/img/cctv6.jpg', categoria: 'cctv' },

    // === CONTROLES DE ACCESO (7 fotos) ===
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso1.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso2.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso3.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso4.PNG', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso5.png', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso6.png', categoria: 'acceso' },
    { nombre: 'Control de acceso', imagen: 'assets/img/controldeacceso7.png', categoria: 'acceso' }
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