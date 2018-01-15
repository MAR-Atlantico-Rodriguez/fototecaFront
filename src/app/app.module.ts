import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { PaginaDeErrorComponent } from './components/pagina-de-error/pagina-de-error.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ImagenComponent,
    PaginaDeErrorComponent,
    ContactoComponent,
    SeccionComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
