import { Component, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/Sesion';
import { ServiceService } from '../../services/service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion: Sesion ={
    correo: '', 
    clave: ''
  }
  constructor(private servicio:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  iniciarSesion(){
    this.servicio.iniciarSesion(this.sesion)
      .subscribe((newSesion) =>{
       if(newSesion==="Incorrecto"){
          alert('Clave incorrecta');
       }else{
        alert('Bienvenido');
        this.router.navigate(['/tabla']);
       }
      });
  }
}
