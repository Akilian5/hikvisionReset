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

productos = [
    {
      nombre: 'Intercomunicador IP DS-KH6320-WTE1',
      descripcion: 'Pantalla táctil de 7", conexión Wi-Fi.',
      imagen: 'assets/img/6320-1.webp',
      categoria: 'intercomunicadores'
    },
    {
      nombre: 'Alarma IP DS-PWA64-Kit',
      descripcion: 'Sistema de alarma inalámbrica con panel central.',
      imagen: 'assets/img/DS-PWA64-KIT-WB.webp',
      categoria: 'alarmas'
    },
    {
      nombre: 'Cámara IP DS-2CD1023G0E-I',
      descripcion: 'Resolución Full HD, visión nocturna IR hasta 30m.',
      imagen: 'assets/img/Hikvision-DS-2CD1023G0E-I.jpg',
      categoria: 'camara'
    },
    {
      nombre: 'DVR Turbo HD 7208HQHI-K1',
      descripcion: '8 canales, soporte HD-TVI, AHD, CVI y cámaras IP.',
      imagen: 'assets/img/DS-7208HQHI-K1S.jpg',
      categoria: 'dvr'
    },
    {
      nombre: 'Control de acceso DS-K1T804EF',
      descripcion: 'Lector de huella y tarjetas RFID, conexión TCP/IP.',
      imagen: 'assets/img/DS-K1T804EF.png',
      categoria: 'acceso'
    },
    {
      nombre: 'Kit CCTV DS-7204HQHI-K1',
      descripcion: 'Incluye DVR y 4 cámaras HD, ideal para oficinas.',
      imagen: 'assets/img/kitHikvision.webp',
      categoria: 'cctv'
    },
    {
      nombre: 'Cámara IP Dome DS-2CD2143G0-I',
      descripcion: 'Resolución 4MP, visión nocturna, ideal para interior.',
      imagen: 'assets/img/D_NQ_NP_758980-CBT81208665782_122024-O.webp',
      categoria: 'camara'
    },
    {
      nombre: 'Intercomunicador IP DS-KH8350-WTE1',
      descripcion: 'Pantalla 7", grabación local y control de accesos.',
      imagen: 'assets/img/DS-KH8350-WTE1-Space-grey-Front-view.png',
      categoria: 'intercomunicadores'
    }
  ];

  productosFiltrados = [...this.productos];

  filtrar(categoria: string) {
    this.productosFiltrados = categoria === 'todos'
      ? [...this.productos]
      : this.productos.filter(p => p.categoria === categoria);
  }
}


