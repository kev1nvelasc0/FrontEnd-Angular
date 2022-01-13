import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciudades} from '../models/Ciudades';
import {Sesion} from '../models/Sesion';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getCiudades(){
    return this.http.get('/api/get');
  }
  getPaises(){
    return this.http.get('/api/getpais');
  }
  createCiudades(ciudades: Ciudades){
    return this.http.post('/api/create',ciudades);
  }
  iniciarSesion(sesion:Sesion){
    return this.http.post('/api/iniciarsesion',sesion);
  }
}
