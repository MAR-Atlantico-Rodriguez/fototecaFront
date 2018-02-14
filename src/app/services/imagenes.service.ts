import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ImagenesService {

  /*Url API*/
  public url = environment.apiUrl;
  public pagina = 0;
  public tamanioPagina = 0;
  public totalPaginas: Number = 0;
  public totalElementos: Number = 0;
  public current_page = 1;

  constructor(public http: HttpClient) { }

  getImagenes(): Observable<any> {
    const url = this.url + '/imagenes';
    return this.http.get(url);
  }

  getImagenesSeccion(id): Observable<any> {
    const url = this.url + '/seccion/' + id + '/' + this.tamanioPagina + '?page=' + this.current_page;
    return this.http.get(url);
  }

  getSecciones(): Observable<any> {
    const url = this.url + '/secciones';
    return this.http.get(url);
  }
}
