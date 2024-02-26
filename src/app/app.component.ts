import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'IA-ABDEL';
  mensajes: any[] = [];
  mensaje: string | undefined;
  cargando: boolean = false; 

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  enviarMensaje() {
    this.cargando = true;
    const url =
      'https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/llm/any-client';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'VVAACCIIOO',
    });

    const body = {
      model: 'meta-llama/llama-2-70b-chat',
      uuid: '32rasdf3io2hod',
      message: {
        role: 'user',
        content: this.mensaje,
      },
      temperature: 0.05,
      origin: 'escueladata',
      tokens: 1000,
      folder: 'root',
      account: 'WatsonX-VN',
      user: '',
    };

    this.http.post<any>(url, body, { headers }).subscribe(
      (data: any) => {
        data.content = data.content.replace(/WX##/g, 'IA-ABDEL: ');

        // Agregar el mensaje enviado a la lista de mensajes
        this.mensajes.push({ texto: this.mensaje, enviado: true });
        // Agregar la respuesta de la API a la lista de mensajes
        this.mensajes.push({ texto: data.content, enviado: false });
        // Limpiar el campo de mensaje después de enviarlo
        this.mensaje = '';
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al enviar mensaje:', error);
        this.cargando = false; 
      }
    );
  }
}
