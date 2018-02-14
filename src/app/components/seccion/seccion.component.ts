import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {environment} from '../../../environments/environment.prod';
import {ActivatedRoute} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})

export class SeccionComponent implements OnInit {
  public imagenes = [];
  public ipServer = environment.ipServer;
  public id_seccion = 0;

  constructor(private imagenService: ImagenesService,
              private route: ActivatedRoute,
              private titleService: Title) {
    this.route.params.subscribe(res => this.id_seccion = ((res.id > 0) ? res.id : 0));
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
          console.log(result);
          if (result.length > 0) {
            this.titleService.setTitle('UNNE - Seccion - ' + result[0].categoria);
            this.imagenes = result;
          }
        } else {
          this.imagenes = result.data;
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
}
