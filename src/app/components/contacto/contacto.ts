import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css'] 
})
export class ContactoComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''], // Opcional
      cantidad: [1, [Validators.required, Validators.min(1), Validators.max(50)]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Agregar listener para cambios en el formulario (debugging)
    this.contactForm.statusChanges.subscribe(status => {
      console.log('Estado del formulario:', status);
      console.log('Formulario válido:', this.contactForm.valid);
      console.log('Errores:', this.contactForm.errors);
    });
  }

  // Getters para fácil acceso en el template
  get nombre() { return this.contactForm.get('nombre'); }
  get correo() { return this.contactForm.get('correo'); }
  get telefono() { return this.contactForm.get('telefono'); }
  get cantidad() { return this.contactForm.get('cantidad'); }
  get mensaje() { return this.contactForm.get('mensaje'); }

  // Función mejorada para obtener el mensaje de error
  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    
    if (!field || !(field.invalid && (field.dirty || field.touched || this.isSubmitted))) {
      return '';
    }

    const errors = field.errors;
    if (!errors) return '';

    // Manejo de errores específicos
    if (errors['required']) {
      return `${this.getFieldLabel(fieldName)} es obligatorio`;
    }
    if (errors['email']) {
      return 'El correo electrónico no es válido';
    }
    if (errors['minlength']) {
      const requiredLength = errors['minlength'].requiredLength;
      return `${this.getFieldLabel(fieldName)} debe tener al menos ${requiredLength} caracteres`;
    }
    if (errors['min']) {
      return 'La cantidad debe ser mínimo 1';
    }
    if (errors['max']) {
      return 'La cantidad no puede ser mayor a 50';
    }

    return 'Este campo contiene errores';
  }

  // Helper para obtener etiquetas de campos
  private getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      'nombre': 'El nombre',
      'correo': 'El correo',
      'cantidad': 'La cantidad',
      'mensaje': 'El mensaje'
    };
    return labels[fieldName] || 'Este campo';
  }

  // Función mejorada para verificar si un campo tiene errores
  hasError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  // Función mejorada para verificar si un campo es válido
  isValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }

  // Getter para el estado del formulario (para usar en el template)
  get isFormValid(): boolean {
    return this.contactForm.valid;
  }

  // Getter para el texto del botón
  get buttonText(): string {
    return this.isFormValid ? 'Enviar mensaje' : 'Completa todos los campos obligatorios';
  }

  // Getter para las clases del botón
  get buttonClass(): string {
    return this.isFormValid ? 'btn btn-danger w-100' : 'btn btn-secondary w-100';
  }

  // Función para marcar todos los campos como touched 
  markAllFieldsTouched() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  // Enviar por WhatsApp
  enviarWhatsApp() {
    this.isSubmitted = true;
    this.markAllFieldsTouched();
    
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const mensaje = `Hola, mi nombre es ${formData.nombre}, mi número es ${formData.telefono || '(no proporcionado)'}, necesito restablecer ${formData.cantidad} dispositivos. Mi correo es ${formData.correo}. Mensaje adicional: ${formData.mensaje}`;
      
      const whatsappUrl = `https://wa.me/573155210979?text=${encodeURIComponent(mensaje)}`;
      window.open(whatsappUrl, '_blank');
      
      // Resetear formulario después del envío
      this.resetForm();
    } else {
      console.log('Formulario inválido:', this.contactForm.errors);
      this.logFormErrors();
    }
  }

  // Función mejorada para enviar por correo
  enviarCorreo() {
    this.isSubmitted = true;
    this.markAllFieldsTouched();
    
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
     
      const asunto = `Consulta Hikvision - ${formData.nombre}`;
      
   
      const cuerpoTexto = `Nombre: ${formData.nombre}%0D%0A` +
                         `Correo: ${formData.correo}%0D%0A` +
                         `Telefono: ${formData.telefono || 'No proporcionado'}%0D%0A` +
                         `Dispositivos: ${formData.cantidad}%0D%0A%0D%0A` +
                         `Mensaje:%0D%0A${formData.mensaje}`;

      // Crear la URL mailto
      const mailtoUrl = `mailto:akilian182@gmail.com?subject=${encodeURIComponent(asunto)}&body=${cuerpoTexto}`;
      
      try {
      
        window.location.href = mailtoUrl;
        
       
        
        console.log('Correo enviado correctamente');
        
        // Resetear formulario después del envío
        setTimeout(() => {
          this.resetForm();
        }, 1000);
        
      } catch (error) {
        console.error('Error al abrir cliente de correo:', error);
        
        // Fallback: Mostrar información para copiar manualmente
        this.mostrarInformacionCorreo(formData);
      }
    } else {
      console.log('Formulario inválido:', this.contactForm.errors);
      this.logFormErrors();
    }
  }

  // Función fallback para mostrar información si falla mailto
  private mostrarInformacionCorreo(formData: any) {
    const mensaje = `Por favor copia esta información y envíala manualmente a akilian182@gmail.com:

Asunto: Consulta Hikvision - ${formData.nombre}

Nombre: ${formData.nombre}
Correo: ${formData.correo}
Teléfono: ${formData.telefono || 'No proporcionado'}
Cantidad de dispositivos: ${formData.cantidad}

Mensaje:
${formData.mensaje}`;

    alert(mensaje);
  }

  // ALTERNATIVA SIMPLE: Siempre usar Gmail Web
  enviarCorreoSimple() {
    this.isSubmitted = true;
    this.markAllFieldsTouched();
    
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      
      const asunto = `Consulta Hikvision - ${formData.nombre}`;
      const cuerpo = `Nombre: ${formData.nombre}
Correo: ${formData.correo}
Teléfono: ${formData.telefono || 'No proporcionado'}
Cantidad de dispositivos: ${formData.cantidad}

Mensaje:
${formData.mensaje}`;

    
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=akilian182@gmail.com&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
      
      window.open(gmailUrl, '_blank');
      
     
      // Resetear formulario
      this.resetForm();
    }
  }

  // Función de debugging para ver errores del formulario
  private logFormErrors() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control && control.invalid) {
        console.log(`Campo ${key}:`, control.errors);
      }
    });
  }

  // Resetear formulario
  private resetForm() {
    this.contactForm.reset({
      nombre: '',
      correo: '',
      telefono: '',
      cantidad: 1,
      mensaje: ''
    });
    this.isSubmitted = false;
  }

  // Función para el botón principal del formulario
  onSubmit() {
    this.isSubmitted = true;
    this.markAllFieldsTouched();
    console.log('Formulario submitido. Válido:', this.contactForm.valid);
  }
}