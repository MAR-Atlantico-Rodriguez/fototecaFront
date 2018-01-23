import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {PaginaDeErrorComponent} from './components/pagina-de-error/pagina-de-error.component';
import {ImagenComponent} from './components/imagen/imagen.component';
import {SeccionComponent} from './components/seccion/seccion.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'imagen/:id', component: ImagenComponent},
  {path: 'seccion', component: SeccionComponent},
  {path: 'seccion/:id', component: SeccionComponent},
  {path: 'error', component: PaginaDeErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
