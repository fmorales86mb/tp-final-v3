import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-bar',
  templateUrl: './grafico-bar.component.html',
  styleUrls: ['./grafico-bar.component.css']
})
export class GraficoBarComponent implements OnInit, OnChanges {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];  
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];         
  public chartColors: Array<any> = [
    { 
      backgroundColor: [
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)'
      ]
    }
]
    
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void { 
    this.barChartData = changes.barChartData.currentValue;
    this.barChartData = changes.barChartData.currentValue;
  }  

  ngOnInit(): void {
  }
}
