import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-resumir-texto-ia',
  templateUrl: './resumir-texto-ia.component.html',
  styleUrls: ['./resumir-texto-ia.component.scss']
})
export class ResumirTextoIaComponent {

  mensajes: any[] = [];
  mensaje: string | undefined;
  cargando: boolean = false; 

  constructor(private http: HttpClient) {}

  enviarMensaje() {
    this.cargando = true;
    const url = 'http://localhost:3000/api/resumir'; 

    const body = { mensaje: this.mensaje };

    this.http.post<any>(url, body).subscribe(
      (data: any) => {
        console.log('Respuesta del servidor:', data);
        // Agregar el mensaje enviado a la lista de mensajes
        this.mensajes.push({ texto: this.mensaje, enviado: true });
        // Agregar la respuesta de la API a la lista de mensajes
        this.mensajes.push({ texto: data.resumen, enviado: false });
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
