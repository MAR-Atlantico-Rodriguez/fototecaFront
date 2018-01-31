import { Component, OnInit } from '@angular/core';
import {ImagenesService} from '../../services/imagenes.service';
import {environment} from '../../../environments/environment.prod';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class InicioComponent implements OnInit {
  public imagenes = [];
  public ipServer = environment.ipServer;
  private title = 'Fototeca - U.N.N.E';

  constructor(private imagenService: ImagenesService, private titleService: Title) { }

  ngOnInit() {
    this.getImagenes();
    this.titleService.setTitle(this.title);
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
