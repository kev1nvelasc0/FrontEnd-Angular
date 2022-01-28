import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import Swal from 'sweetalert2';
import * as jsPDF from 'node_modules/jspdf';
import { timer } from 'rxjs';

import * as FileSaver from 'file-saver';
import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableCell,
  TableRow,
  WidthType,
} from 'docx';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  title = 'Excel';
  ciudades: any = [];
  ciudadById: any = [];
  titulos = ['Ciudad', 'Pais', 'Poblacion', 'Acciones'];
  documento: any;
  tabladatos: any;
  datos: any;
  exportar: boolean = true;
  filterCiudad = '';
  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.getCiudades();
  }
  exportarDOC() {
    this.tabladatos = new Table({
      columnWidths: [3000, 3000, 3000],
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Ciudad')],
            }),
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Pais')],
            }),
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph('Poblacion')],
            }),
          ],
        }),
      ],
    });
    for (let i = 0; i < this.ciudades.length; i++) {
      console.log(this.ciudades[i].nombre);
      this.tabladatos.addChildElement(
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph(this.ciudades[i].nombre)],
            }),
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph(this.ciudades[i].pais)],
            }),
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [new Paragraph(this.ciudades[i].poblacion)],
            }),
          ],
        })
      );
      console.log(this.tabladatos);
    }
    this.documento = new Document({
      sections: [
        {
          children: [
            new Paragraph({ text: 'Reporte de ciudades' }),
            this.tabladatos,
          ],
        },
      ],
    });
    Packer.toBlob(this.documento).then((blob) => {
      FileSaver.saveAs(blob, 'Reporte.docx');
    });
  }
  exportarPDF() {
    this.exportar = false;
    const tiempo = timer(1);
    tiempo.subscribe((n) => {
      const doc = new jsPDF();
      doc.fromHTML(document.getElementById('datosCiudad'), 10, 10);
      console.log('mensaje');
      doc.save('Reporte');
      this.exportar = true;
    });
  }
  exportarXLS() {
    this.exportar = false;
    const tiempo = timer(1);
    tiempo.subscribe((n) => {
      const tabla = document.getElementById('tabla');
      const hoja: XLSX.WorkSheet = XLSX.utils.table_to_sheet(tabla);
      const libro: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(libro, hoja, 'Hoja 1');
      XLSX.writeFile(libro, 'Reporte.xlsx');
      this.exportar = true;
    });
  }

  getCiudades() {
    this.servicio.getCiudades().subscribe((ciudades) => {
      this.ciudades = ciudades;
    });
  }

  eliminarCiudad(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Estás seguro?',
        text: 'Estas a punto de eliminar un registro',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado',
            'Registro eliminado correctamente',
            'success'
          );
          this.servicio.deleteCiudades(id).subscribe((eliminado) => {
            this.getCiudades();
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelado');
        }
      });
  }
}
