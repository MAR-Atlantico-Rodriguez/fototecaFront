import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {environment} from '../../../environments/environment.prod';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent implements OnInit {
  public imagenes = [];
  public ipServer = environment.ipServer;
  private id_seccion = 0;

  constructor(private imagenService: ImagenesService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(res => this.id_seccion = res.id);
  }

  ngOnInit() {
    this.getImagenes();
  }

  getImagenes() {
    this.imagenService.getImagenesSeccion(this.id_seccion).subscribe(
      result => {
        if (result.code !== 200) {
          console.log(result);
          this.imagenes = result;
        } else {
          this.imagenes = result.data;
        }
      },
      error => {
        console.log(<any>error);
      });
  }
}
