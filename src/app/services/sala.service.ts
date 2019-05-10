import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GLOBAL } from './global';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  public url: string;
  public salaSeleccionada: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  registrarSala(token, sala: Sala): Observable<any> {
    const params = JSON.stringify(sala);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.post(this.url + 'sala', params, {headers});
  }

  obtenerSalas(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.get(this.url + 'sala', {headers});
  }

  eliminarSala(token, idSala): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.delete(this.url + 'sala/' + idSala, {headers: headers});
  }

  editarSala(token, sala: Sala): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    const params = JSON.stringify(sala);
    console.log(token);
    console.log(sala);

    return this._http.put(this.url + 'sala/' + sala._id, params, {headers: headers});
  }
}
