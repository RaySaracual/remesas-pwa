import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Validators, FormGroup,FormBuilder } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  dayRate=0;
  form: FormGroup;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{   ticks: {
      beginAtZero: true,
    }}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };




  public barChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55], label: 'Recibido' },
    { data: [28, 48, 40, 19, 86, 27], label: 'Enviado' }
  ];




  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // { id:1,title: 'Card 1', cols: 1, rows: 1 },
          { id:1,title: 'Tasa del dia', cols: 2, rows: 1 },
          { id:2,title: 'Cuentas de Operaciones', cols: 2, rows: 1 },
          { id:3,title: 'Estadisticas', cols: 2, rows: 1 }
        ];
      }

      return [
        // { id:1,title: 'Card 1', cols: 2, rows: 1 },
        { id:1,title: 'Tasa del dia', cols: 2, rows: 1 },
        { id:2,title: 'Cuentas de Operaciones', cols: 1, rows: 1 },
        { id:3,title: 'Estadisticas', cols: 1, rows: 1 } 
      ];
    })
  );
  activeEditDayRate: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private fb:FormBuilder) {}



ngOnInit(){
  this.createForm()

  localStorage.getItem('dayRate')

  this.loadDataForm();
}



get dayRateNoValido() {
  return this.form.get('dayRate').invalid && this.form.get('dayRate').touched
}

  
  createForm() {
    this.form = this.fb.group({
      dayRate  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(8) ]  ]
  })

}


loadDataForm() {
  this.form.reset({
    dayRate: localStorage.getItem('dayRate')? parseInt(localStorage.getItem('dayRate')) : 0 ,
  });

}



editDayRate(){
  this.activeEditDayRate = !this.activeEditDayRate

}

saveDayRate(){
localStorage.setItem('dayRate', this.form.value.dayRate);
this.activeEditDayRate=false;

}

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    const data = [
     Math.round(Math.random() * 100) ,
      59,
      80,
      Math.round(Math.random() * 100),
      56,
     Math.round (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
}



}

