import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {environment} from '../../../environments/environment.prod';
import {ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})

export class SeccionComponent implements OnInit {
  public imagenes = [];
  public ipServer = environment.ipServer;
  public id_seccion = 0;
  public pagina = 0;
  public tamanioPagina = 1;
  public current_page = 1;

  constructor(private imagenService: ImagenesService,
              private route: ActivatedRoute,
              private titleService: Title) {
    this.route.params.subscribe(res => this.id_seccion = ((res.id > 0) ? res.id : 0));
    this.imagenService.tamanioPagina = this.tamanioPagina;
    this.imagenService.pagina = this.pagina;
  }

  ngOnInit() {
    if (this.id_seccion > 0) {
      this.getImagenes();
    } else {
      this.getSecciones();
    }
  }

  getImagenes() {
    this.imagenService.getImagenesSeccion(this.id_seccion).subscribe(
      result => {
        if (result.code !== 200) {
          if (result.data.length > 0) {
            this.titleService.setTitle('UNNE - Seccion - ' + result.data[0].categoria);
            this.imagenes = result.data;
            this.imagenService.totalElementos = result.total;
            this.imagenService.totalPaginas = result.last_page;
          }
        } else {
          alert('Error, de transmision codigo: ' + result.code);
        }
      },
      error => {
        console.log(<any>error);
      });
  }

  getSecciones() {
    this.imagenService.getSecciones().subscribe(data => {
      this.titleService.setTitle('UNNE - Secciones');
      this.imagenes = data;
      console.log(data);
    });
  }

  getVerImagen(id) {
    alert(id);
  }

  agregarImagenesSeccion() {
    this.imagenService.current_page++;
    this.imagenService.getImagenesSeccion(this.id_seccion).subscribe(data => {
      data.data.forEach(img => {
        this.imagenes.push(img);
      });
    });
  }
}
