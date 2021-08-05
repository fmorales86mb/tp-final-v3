import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-line',
  templateUrl: './grafico-line.component.html',
  styleUrls: ['./grafico-line.component.css']
})
export class GraficoLineComponent implements OnInit, OnChanges {
  
  @Input() lineChartLabels: Label[] = [];
  @Input() lineChartData: ChartDataSets[] = []; 
    
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
    
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {


    //this.barChartData = [];
    // this.barChartLabels = changes.barChartLabels.currentValue;
    //this.barChartData.push(changes.barChartData.currentValue);
    //this.title = changes.title.currentValue;    
  }  

  ngOnInit(): void {
    console.log(this.lineChartData);
  }
}
