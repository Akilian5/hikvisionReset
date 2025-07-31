import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'] 
})
export class ContactoComponent {
  nombre = '';
  telefono = '';
  correo = '';
  cantidad = 1;


enviar() {
  const mensaje = `Hola, mi nombre es ${this.nombre}, mi número es ${this.telefono}, necesito restablecer ${this.cantidad} dispositivos. Mi correo es ${this.correo}`;
  window.open(`https://wa.me/573224415640?text=${encodeURIComponent(mensaje)}`, '_blank');
}

}
