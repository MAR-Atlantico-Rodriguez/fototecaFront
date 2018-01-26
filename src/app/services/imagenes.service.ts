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
  public imagenes = new Subject<any>();

  constructor(public http: HttpClient) { }

  getImagenes(): Observable<any> {
    const url = this.url + '/imagenes';
    return this.http.get(url);
  }

  getImagenesSeccion(id): Observable<any> {
    const url = this.url + '/seccion/' + id;
    return this.http.get(url);
  }
}
