import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {Usuario} from '../../models/Usuario';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  usuario: any =[];
  constructor(private servicio: ServiceService) {

   }

  ngOnInit(): void {
    this.servicio.getUsuarios().subscribe(usuario =>{
      this.usuario = usuario;
      console.log(usuario);
    });
  }

}
