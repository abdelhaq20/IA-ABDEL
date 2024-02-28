import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrimerTestIaComponent } from './components/primer-test-ia/primer-test-ia.component';
import { SegundoTestIaComponent } from './components/segundo-test-ia/segundo-test-ia.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'primer-test-ia', component: PrimerTestIaComponent },
  { path: 'segundo-test-ia', component: SegundoTestIaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
