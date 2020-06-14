import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-registre',
  templateUrl: './new-registre.component.html',
  styleUrls: ['./new-registre.component.scss']
})
export class NewRegistreComponent implements OnInit {

  form: FormGroup

  listPaymentType:any[] = [
    {id: 1, description: 'Transferencia'},
    {id: 2, description: 'Efectivo'},
  ];


  listHomeBank: any[] = [
    {id: 1, description: 'Banco Popular'},
    {id: 2, description: 'Ban Reservas'},
    {id: 3, description: 'BHD Léon'}
  ];


  listBankToSend: any[] = [
    {id: 1, description: 'Banesco'},
    {id: 2, description: 'Banco de Venezuela'},
    {id: 3, description: 'Mercantil'}
  ];

  documentType: any[] = [
    {id: 1, description: 'Cédula'},
    {id: 2, description: 'Pasaporte'},
  ];
  dayOfTheRate: number;

  constructor(public dialogRef: MatDialogRef<NewRegistreComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    this.dayOfTheRate =  parseInt(localStorage.getItem('dayRate'))
    this.createForm()
  }

  onNoClick() {
    this.dialogRef.close();
  }


  createForm() {
    this.form = this.fb.group({

      // Origen
      client  : ["", [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      paymentType  : [this.listPaymentType[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      paymentNumber  : ['', [ Validators.required ]  ],
      homeBank : [this.listHomeBank[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      totalReceived  : [0, [ Validators.required, Validators.maxLength(20) ]  ],

     // Valores de configuracion usuario
      rateOfTheDay  : [this.dayOfTheRate, [ Validators.required, Validators.maxLength(2) ]  ],
     
     // Destino
      titleNameToSend  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      bankToSend  : [this.listBankToSend[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      destinationAccount  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      numberDocument  : [, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      totalToSend  : [{value:0,disabled:true},  [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
      // documentType  : [this.documentType[0].id, [ Validators.required, Validators.minLength(3), Validators.maxLength(20) ]  ],
  })

}


loadDataForm() {
  this.form.reset({
    dayRate: '',
  });

}


calculateTotalSend(){
  let totalToSend=0;
  totalToSend = this.dayOfTheRate * parseInt(this.form.value.totalReceived);
  this.form.get('totalToSend').setValue(totalToSend);
}




}
