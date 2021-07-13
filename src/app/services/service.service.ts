import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/Usuario';
import {Sesion} from '../models/Sesion';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getUsuarios(){
    return this.http.get('/api/obtenerusuarios');
  }
  createUsuarios(usuario: Usuario){
    return this.http.post('/api/crearusuarios',usuario);
  }
  iniciarSesion(sesion:Sesion){
    return this.http.post('/api/iniciarsesion',sesion);
  }
}
