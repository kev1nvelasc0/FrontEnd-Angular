import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Workbook } from 'exceljs';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css'],
})
export class DocumentoComponent implements OnInit {
  titulo: string = 'Lorem Ipsum';
  texto: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada sed elit non porta. Nulla id urna eu mi consectetur tempus.';
  ciudades: any = [];
  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.getCiudades();
  }
  exportExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Hoja 1');
    worksheet.columns = [
      {
        header: this.titulo,
      },
    ];

    worksheet.mergeCells('A1:L1'); //combina las celdas a1-e1

    worksheet.getCell('A1').alignment = {
      //alinea las celdas
      vertical: 'middle',
      horizontal: 'center',
    };

    //var row = worksheet.addRow([], 'n'); añade una fila en blanco

    var row = worksheet.addRow([this.texto], 'n');
    worksheet.mergeCells('A2:L2');

    var row = worksheet.addRow(['id', 'nombre', 'pais', 'poblacion'], 'n');
    for (let i = 0; i < this.ciudades.length; i++) {
      var rows = [
        [
          this.ciudades[i].id,
          this.ciudades[i].nombre,
          this.ciudades[i].pais,
          this.ciudades[i].poblacion,
        ],
      ];
      worksheet.addRows(rows, 'n');
    }

    /*
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 10 },
      { header: 'Name', key: 'name', width: 32 },
      { header: 'Brand', key: 'brand', width: 10 },
      { header: 'Color', key: 'color', width: 10 },
      { header: 'Price', key: 'price', width: 10 },
    ];
    this.data.forEach((e) => {
      worksheet.addRow(
        {
          id: e.id,
          name: e.name,
          brand: e.brand,
          color: e.color,
          price: e.price,
        },
        'n'
      );
    });
    */
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      FileSaver.saveAs(blob, 'Reporte.xlsx');
    });
  }
  getCiudades() {
    this.servicio.getCiudades().subscribe((ciudades) => {
      this.ciudades = ciudades;
      console.log(this.ciudades);
    });
  }
}
