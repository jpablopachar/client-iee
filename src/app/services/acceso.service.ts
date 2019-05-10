import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioService} from "./usuario.service";
import {GLOBAL} from "./global";
import {Acceso} from "../models/acceso";

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  public url: string;
  public token;

  constructor(public _http: HttpClient, _usuarioService: UsuarioService) {
    this.url = GLOBAL.url;
    this.token = _usuarioService.obtenerToken();
  }

  guardarAcceso(token, acceso: Acceso): Observable<any> {
    const params = JSON.stringify(acceso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.post(this.url + 'acceso', params, {headers: headers});
  }

  listarAccesos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.get(this.url + 'acceso', {headers: headers});
  }

  eliminarAcceso(token, idAcceso): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this._http.delete(this.url + 'acceso/' + idAcceso, {headers: headers});
  }
}
