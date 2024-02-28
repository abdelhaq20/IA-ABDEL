// segundo-test-ia.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-test-ia',
  templateUrl: './segundo-test-ia.component.html',
  styleUrls: ['./segundo-test-ia.component.scss']
})
export class SegundoTestIaComponent {

  mensajes: any[] = [];
  mensaje: string | undefined;
  cargando: boolean = false; 

  constructor(private http: HttpClient) {}

  enviarMensaje() {
    this.cargando = true;
    const url = 'http://localhost:3000/api/enviar-mensaje'; 

    const body = { mensaje: this.mensaje };

    this.http.post<any>(url, body).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data);
        // Agregar el mensaje enviado a la lista de mensajes
        this.mensajes.push({ texto: this.mensaje, enviado: true });
        // Agregar la respuesta de la API a la lista de mensajes
        this.mensajes.push({ texto: data.content, enviado: false });
        // Limpiar el campo de mensaje después de enviarlo
        this.mensaje = '';
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al enviar solicitud:', error);
        alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
        this.cargando = false; 
      }
    );
  }
}
