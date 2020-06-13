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


  dayRate=3000;
  form: FormGroup;


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          // { id:1,title: 'Card 1', cols: 1, rows: 1 },
          { id:1,title: 'Tasa del dia', cols: 1, rows: 1 },
          { id:2,title: 'Cuentas de Operaciones', cols: 1, rows: 1 },
          { id:3,title: 'Estadisticas', cols: 1, rows: 1 }
        ];
      }

      return [
        // { id:1,title: 'Card 1', cols: 2, rows: 1 },
        { id:1,title: 'Tasa del dia', cols: 1, rows: 1 },
        { id:2,title: 'Cuentas de Operaciones', cols: 1, rows: 2 },
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

  // get correoNoValido() {
  //   return this.forma.get('correo').invalid && this.forma.get('correo').touched
  // }

  // get usuarioNoValido() {
  //   return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  // }

  // get distritoNoValido() {
  //   return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
  // }


  
  createForm() {
    this.form = this.fb.group({
      dayRate  : [0, [ Validators.required, Validators.minLength(3), Validators.maxLength(8) ]  ]
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
console.log(this.form.value);
localStorage.setItem('dayRate', this.form.value.dayRate);
this.activeEditDayRate=false;

}



}

