import { Component, OnInit } from '@angular/core';
import { Ciudades } from 'src/app/models/Ciudades';
import { ServiceService } from '../../services/service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  pais: any = [];
  paises: any =[{
    nombre: "España",
    id_pais: 1
  },{
    nombre:"Inglaterra",
    id_pais: 2
  }];
  ciudades: Ciudades ={
    nombre: '',
    poblacion: 0,
    id_pais: 0
  }
  constructor(private servicio:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getPais();
  }

  getPais(){
    this.servicio.getPaises().subscribe(pais =>{
      this.pais = pais;
    });

  }
  guardarCiudad(){
    this.servicio.createCiudades(this.ciudades)
      .subscribe((newciudad) =>{
       this.router.navigate(['/tabla']);
      });
    }

}