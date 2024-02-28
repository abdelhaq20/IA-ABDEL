import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrimerTestIaComponent } from './components/primer-test-ia/primer-test-ia.component';
import { SegundoTestIaComponent } from './components/segundo-test-ia/segundo-test-ia.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrimerTestIaComponent,
    SegundoTestIaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
