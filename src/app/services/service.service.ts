import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciudades} from '../models/Ciudades';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getCiudades(){
    return this.http.get('/api/get');
  }
  getCiudadesById(id:string){
    return this.http.get('/api/get/'+id);
  }
  deleteCiudades(id:number){
    return this.http.delete('/api/get/'+id);
  }
  getPaises(){
    return this.http.get('/api/getpais');
  }
  createCiudades(ciudades: Ciudades){
    return this.http.post('/api/create',ciudades);
  }
  updateCiudades(ciudades: Ciudades,id:string|null){
    return this.http.put('/api/get/'+id,ciudades);

  }
}
