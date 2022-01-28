import { Component, OnInit } from '@angular/core';
import { Ciudades } from 'src/app/models/Ciudades';
import { ServiceService } from '../../services/service.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  pais: any = [];
  ciudades: Ciudades ={
    nombre: '',
    poblacion: 0,
    id_pais: 0
  }

  constructor(private servicio:ServiceService, private router:Router,) {
   }

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
        Swal.fire({
          icon: 'success',
          title: 'Registro guardado',
          showConfirmButton: false,
          timer: 1500
        })
       this.router.navigate(['/tabla']);
      });
    }

}