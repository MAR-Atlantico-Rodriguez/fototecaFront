import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public imagenes = [];
  public ipServer = environment.ipServer;

  constructor(private imagenService: ImagenesService) { }

  ngOnInit() {
    this.getImagenes();
  }

  getImagenes() {
    this.imagenService.getImagenes().subscribe(
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

  getVerImagen(id) {
    alert(id);
  }
}
