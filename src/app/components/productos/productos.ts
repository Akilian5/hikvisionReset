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
    { nombre: 'Intercomunicador DS-KH6320-WTE1', imagen: 'assets/img/intecom1.png', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador DS-KH8350-WTE1', imagen: 'assets/img/intercom2.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador DS-KV8213-WME1', imagen: 'assets/img/intercom3.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador DS-KH9310-WTE1', imagen: 'assets/img/intercom4.jpg', categoria: 'intercomunicadores' },
    { nombre: 'Intercomunicador DS-KV6113-WPE1', imagen: 'assets/img/intercom5.jpg', categoria: 'intercomunicadores' },

    // === ALARMAS (3 fotos) ===
    { nombre: 'Alarma DS-PWA64-Kit', imagen: 'assets/img/alarmas1.png', categoria: 'alarmas' },
    { nombre: 'Alarma DS-PWA96-Kit', imagen: 'assets/img/alarmas2.png', categoria: 'alarmas' },
    { nombre: 'Alarma DS-PWA32-KIT', imagen: 'assets/img/alarmas3.png', categoria: 'alarmas' },

    // === FAMILIA CCTV (6 fotos) ===
    { nombre: 'Cámara IP DS-2CD1023G0E-I', imagen: 'assets/img/cctv1.png', categoria: 'cctv' },
    { nombre: 'DVR Turbo HD DS-7208HQHI-K1', imagen: 'assets/img/cctv2.jpg', categoria: 'cctv' },
    { nombre: 'Cámara Dome DS-2CD2143G0-I', imagen: 'assets/img/cctv3.png', categoria: 'cctv' },
    { nombre: 'Kit CCTV DS-7204HQHI-K1', imagen: 'assets/img/cctv4.jpg', categoria: 'cctv' },
    { nombre: 'NVR DS-7608NI-K1', imagen: 'assets/img/cctv5.jpg', categoria: 'cctv' },
    { nombre: 'Cámara PTZ DS-2DE3A400BW-DE', imagen: 'assets/img/cctv6.jpg', categoria: 'cctv' },

    // === CONTROLES DE ACCESO (7 fotos) ===
    { nombre: 'Control de acceso DS-K1T804EF', imagen: 'assets/img/controldeacceso1.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K1T801EF', imagen: 'assets/img/controldeacceso2.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K1T671MF', imagen: 'assets/img/controldeacceso3.jpg', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K3B601SX', imagen: 'assets/img/controldeacceso4.PNG', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K1T804AMF', imagen: 'assets/img/controldeacceso5.png', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K1A802EF', imagen: 'assets/img/controldeacceso6.png', categoria: 'acceso' },
    { nombre: 'Control de acceso DS-K1T321EFX', imagen: 'assets/img/controldeacceso7.png', categoria: 'acceso' }
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