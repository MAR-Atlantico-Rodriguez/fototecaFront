import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { ImagenComponent } from './components/imagen/imagen.component';
import { PaginaDeErrorComponent } from './components/pagina-de-error/pagina-de-error.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SeccionComponent } from './components/seccion/seccion.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import {ImagenesService} from './services/imagenes.service';

import { NgMasonryGridModule } from 'ng-masonry-grid';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    ImagenComponent,
    PaginaDeErrorComponent,
    ContactoComponent,
    SeccionComponent,
    BuscadorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMasonryGridModule
  ],
  providers: [
    ImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
