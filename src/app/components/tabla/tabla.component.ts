import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  ciudades: any =[];
  constructor(private servicio: ServiceService) {

   }

  ngOnInit(): void {
    this.servicio.getCiudades().subscribe(ciudades =>{
      this.ciudades = ciudades;
      console.log(ciudades);
    });
  }

}
