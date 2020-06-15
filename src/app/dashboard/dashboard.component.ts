import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Validators, FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  dayRate=0;
  form: FormGroup;


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



}

