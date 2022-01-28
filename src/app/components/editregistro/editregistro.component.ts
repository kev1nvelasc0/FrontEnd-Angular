import { Component, OnInit } from '@angular/core';
import { Ciudades } from 'src/app/models/Ciudades';
import { ServiceService } from '../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editregistro',
  templateUrl: './editregistro.component.html',
  styleUrls: ['./editregistro.component.css']
})
export class EditregistroComponent implements OnInit {
  pais: any = [];
  ciudadById : any= [];
  ciudades: Ciudades ={
    nombre: '',
    poblacion: 0,
    id_pais: 0
  }
  id: string | null;
  constructor(private servicio:ServiceService, private router:Router,private aRoute: ActivatedRoute) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getPais();
    if(this.id !=null){      
      this.servicio.getCiudadesById(this.id).subscribe(ciudadById =>{
        this.ciudadById = ciudadById;
        this.ciudades.nombre=this.ciudadById[0].nombre
        this.ciudades.poblacion=this.ciudadById[0].poblacion
        this.ciudades.id_pais=this.ciudadById[0].id_pais
      });
    }else{

    }
  }

  getPais(){
    this.servicio.getPaises().subscribe(pais =>{
      this.pais = pais;
    });

  }
  editarCiudad(){
    this.servicio.updateCiudades(this.ciudades,this.id)
      .subscribe((newciudad) =>{
        Swal.fire({
          icon: 'success',
          title: 'Modificado guardado',
          showConfirmButton: false,
          timer: 1500
        })
       this.router.navigate(['/tabla']);
      });
    }




}
