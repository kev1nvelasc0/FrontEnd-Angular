import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {
  ChartData,
  BarChartOption,
  ChartView,
  PieChartView,
  ChartOption,
} from 'ngx-chart';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnInit {
  ciudades: any = [];
  grafico: boolean = false;
  chartData: ChartData[] = [];
  colores: any[] = ['#FFCD06', '#337FFF', '#FF8A06', '#FF0606'];
  pieView: PieChartView = {
    height: 400,
    width: 400,
    radius: 200,
  };
  chartOptions: ChartOption = {
    showLegend: true,
    legendTitle: 'Total',
  };
  constructor(private servicio: ServiceService) {}

  ngOnInit(): void {
    this.getCiudades();
  }
  getCiudades() {
    this.servicio.getCiudades().subscribe((ciudades) => {
      this.ciudades = ciudades;
      for (let i = 0; i < this.ciudades.length; i++) {
        this.chartData.push({
          name: this.ciudades[i].nombre,
          value: this.ciudades[i].poblacion,
          color: this.colores[i],
        });
      }
      console.log(this.chartData);
      this.grafico = true;
    });
  }
}
