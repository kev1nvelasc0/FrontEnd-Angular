import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceService } from '../../services/service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: Usuario ={
    nombre: '',
    apellido: '',
    correo: '', 
    clave: ''
  }
  constructor(private servicio:ServiceService, private router:Router) { }

  ngOnInit(): void {
    
  }
  guardarUsuario(){
    this.servicio.createUsuarios(this.usuario)
      .subscribe((newUsuario) =>{
       console.log(newUsuario);
       this.router.navigate(['/tabla']);
      });
}
}